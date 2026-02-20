import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <h2 className="head">About Us</h2>

        <p className="intro">
          Kalash Spices was founded in 2002 in the heart of Unjha, Gujarat — a city
          known as the spice hub of India.
          <br /><br />
          What began as a small venture with a vision to deliver pure, aromatic
          spices has now grown into a trusted name across households and stores.
          <br /><br />
          We are committed to preserving the authenticity of Indian flavors by
          sourcing directly from farms, using traditional processing methods,
          and maintaining the highest standards of purity.
          <br /><br />
          With Kalash Spices, every pinch carries the taste of tradition.
        </p>
      </main>

      <Footer />
    </>
  );
}
