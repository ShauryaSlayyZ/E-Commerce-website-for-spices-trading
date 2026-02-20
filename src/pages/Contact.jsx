import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);  
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <h2 className="head">Contact Us</h2>
        <div className="contact-layout">
 <div className="contact-info">
        <p className="intro">
          For any inquiries, bulk orders, or partnership opportunities, feel
          free to reach out to our team:
          <br /><br />
          <strong>Dipesh 📱:</strong> +91 98765 43210<br />
          <strong>Navin 📱:</strong> +91 91234 56789<br /><br />
          📧 <strong>Email:</strong> support@kalashspices.com<br />
          📍 <strong>Location:</strong> Unjha, Gujarat, India
        </p></div>

        {/* CONTACT FORM */}
        <div className="contact-box">
          <p>To reach us please contact us via:</p>

          <form className="contact-inputs" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <br />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />

            <button type="submit">Submit</button><br />
          </form>
        </div></div>
      </main>

      <Footer />
    </>
  );
}
