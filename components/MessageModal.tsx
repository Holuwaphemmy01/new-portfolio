import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MessageModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    const originalTouchAction = (document.body.style as any).touchAction || ""
    document.body.style.overflow = "hidden"
    ;(document.body.style as any).touchAction = "none"
    const preventDefault = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault()
    }
    document.addEventListener("touchmove", preventDefault, { passive: false })
    return () => {
      document.body.style.overflow = originalOverflow
      ;(document.body.style as any).touchAction = originalTouchAction
      document.removeEventListener("touchmove", preventDefault)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      // Read response safely (try JSON, fallback to text)
      let body: any = null
      const contentType = res.headers.get("content-type") || ""
      if (contentType.includes("application/json")) {
        body = await res.json()
      } else {
        body = await res.text()
      }

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setStatus(null)
          onClose()
        }, 1400)
      } else {
        console.error("Contact API error", res.status, body)
        setStatus("error")
      }
    } catch (err) {
      // Network / runtime error
      console.error("Fetch to /api/contact failed:", err)
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" aria-hidden />
      <div className="relative bg-background border border-border p-6 rounded-md shadow-lg w-full max-w-md z-10 pointer-events-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded bg-input"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded bg-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={6}
            className="w-full border px-4 py-2 rounded bg-input"
          />

          <div className="flex gap-3 justify-end items-center">
            {status === "success" && (
              <p className="text-sm text-green-500">Message sent — thank you.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">Failed to send — try again later.</p>
            )}
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border"
              disabled={sending}
            >
              Cancel
            </Button>
            <Button type="submit" className="px-4 py-2" disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
