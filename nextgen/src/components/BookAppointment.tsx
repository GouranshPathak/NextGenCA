// src/components/BookAppointment.tsx

import { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "" });
      }
    } catch (err) {
      console.error("Failed to submit appointment:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Get Expert Advice</h2>
      {submitted ? (
        <p className="text-green-600">Your consultation has been booked!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            type="email"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Service</option>
            <option value="GST Registration">GST Registration</option>
            <option value="Income Tax Filing">Income Tax Filing</option>
            <option value="Business Incorporation">Business Incorporation</option>
            <option value="Tax Planning">Tax Planning</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded"
          >
            {loading ? "Submitting..." : "Book Free Consultation"}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
