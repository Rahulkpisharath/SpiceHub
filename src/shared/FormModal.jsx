import { useState } from "react";

export default function FormModal({ isOpen, onClose, title = "Contact Us" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    return `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `;
  };

  const sendEmail = () => {
    const subject = encodeURIComponent("New User Enquiry");
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:free2kpr@gmail.con?subject=${subject}&body=${body}`;
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/9846232948?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:justify-end border-t">
          <button
            onClick={sendEmail}
            className="rounded-full bg-red-600 px-8 py-3 text-white font-medium hover:bg-red-700 transition"
          >
            Cancel
          </button>

          <button
            onClick={sendWhatsApp}
            className="rounded-full bg-green-600 px-8 py-3 text-white font-medium hover:bg-green-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
