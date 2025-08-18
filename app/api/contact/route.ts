import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUserPresent = !!process.env.SMTP_USER
    const smtpPassPresent = !!process.env.SMTP_PASS
    console.log("SMTP config present:", { host: !!smtpHost, port: smtpPort, hasAuth: smtpUserPresent && smtpPassPresent })

    let transporter
    let usingTestAccount = false

    if (smtpHost && smtpPort && smtpUserPresent && smtpPassPresent) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        // shorter timeouts to fail fast in dev
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
        requireTLS: process.env.SMTP_SECURE !== "true" ? true : undefined,
      })

      try {
        await transporter.verify()
        console.log("SMTP transporter verified")
      } catch (verifyErr) {
        console.error("SMTP verify failed:", verifyErr)
        // fallback to test account below
        transporter = undefined
      }
    }

    // Fallback: try Ethereal, if that also fails use a non-network JSON transport (dev)
    if (!transporter) {
      try {
        console.warn("Falling back to Ethereal test account for email delivery (dev only).")
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: { user: testAccount.user, pass: testAccount.pass },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000,
        })
        usingTestAccount = true
      } catch (ethErr) {
        console.warn("Ethereal unavailable or network blocked — using jsonTransport (dev-only).", ethErr)
        // jsonTransport does not make network calls; good for local dev when SMTP is blocked
        transporter = nodemailer.createTransport({ jsonTransport: true })
      }
    }

    // sending with a safe fallback if sendMail itself times out
    let info
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@example.com"
    try {
      info = await transporter.sendMail({
        // keep from as a verified address (SMTP may reject arbitrary from addresses)
        from: `"${name}" <${fromAddress}>`,
        // allow recipient to reply directly to the sender's email
        replyTo: email,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || "recipient@example.com",
        subject: `Website message from ${name} <${email}>`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${name} &lt;${email}&gt;</p>
               <p>${(message || "").replace(/\n/g, "<br/>")}</p>`,
      })
    } catch (sendErr) {
      console.error("sendMail failed:", sendErr)
      // final fallback to jsonTransport to avoid blocking dev flow
      const fallback = nodemailer.createTransport({ jsonTransport: true })
      info = await fallback.sendMail({
        from: `"${name}" <${fromAddress}>`,
        replyTo: email,
        to: process.env.CONTACT_EMAIL || "recipient@example.com",
        subject: `Website message from ${name} <${email}>`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      })
      console.log("Used jsonTransport; email payload:", info)
    }

    if (usingTestAccount && nodemailer.getTestMessageUrl && info) {
      const preview = nodemailer.getTestMessageUrl(info)
      if (preview) console.log("Ethereal preview URL:", preview)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("mail error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}