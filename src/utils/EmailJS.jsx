import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: "", message: "" }), 3000); // Hide after 3s
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const timeInput = form.current.querySelector('input[name="time"]');
    if (timeInput) timeInput.value = new Date().toLocaleString();

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          showToast("success", "Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          showToast("error", "Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      {toast.message && (
        <div className="toast toast-end z-50">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="fade-up-scroll bg-base-300 h-full  p-6 shadow-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full py-2"
          required
        />
        <textarea
          name="message"
          className="textarea textarea-bordered w-full h-full"
          placeholder="Your Message"
          required
        ></textarea>
        <input type="hidden" name="time" />

        <button
          type="submit"
          className="btn btn-primary w-full md:w-40"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;