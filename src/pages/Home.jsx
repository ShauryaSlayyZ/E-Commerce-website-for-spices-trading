import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <h2 className="head">Home</h2>

        <p className="intro">
          <b>Welcome to Kalash Spices</b><br />
          Pure. Authentic. Aromatic.<br /><br />

          At Kalash Spices, we bring the soul of Indian cooking to your kitchen.
          Handpicked from the finest farms and traditionally processed, our
          spices retain their natural aroma, color, and flavor — making every
          meal a celebration.
          <br /><br /><hr /><br />

          <b>Why Choose Kalash Spices?</b><br /><br />
          🌿 100% Pure & Natural – No preservatives, no artificial colors.<br /><br />
          🧂 Handpicked Quality – Sourced from the best farms across India.<br /><br />
          ✅ FSSAI Certified – Hygienically processed and packaged.<br /><br />
          🚚 Bulk Availability All Year Round<br /><br />
          🧼 Hygienically Cleaned & Graded<br /><br />
          📦 Custom Packaging Options (25kg / 50kg / as per request)<br /><br />
          🚛 Pan India & Global Supply Chain<br /><br />
          💼 Trusted by Traders, Exporters & Food Industries<br /><br />
          <hr /><br />

          <b>Order Now – Experience the Purity</b><br /><br />
          🛒{" "}
          <button id="shop" onClick={() => navigate("/products")}>
            Shop Now
          </button>
          <br /><br />
          📦 Free shipping on orders above ₹499<br />
          📞 Call/WhatsApp for bulk & wholesale inquiries
        </p>
      </main>

      <Footer />
    </>
  );
}
