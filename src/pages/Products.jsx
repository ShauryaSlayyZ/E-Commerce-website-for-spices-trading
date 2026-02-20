import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Cumin Seeds (Jeera)",
    image: "/images/jeera.jpeg",
    description:
      "Known for their earthy flavor and digestive benefits, sourced from Gujarat and Rajasthan."
  },
  {
    name: "Fennel Seeds (Saunf)",
    image: "/images/sauf2.jpeg",
    description:
      "Sweet and aromatic, used as a spice and mouth freshener."
  },
  {
    name: "Carom Seeds (Ajwain)",
    image: "/images/ajwain.jpeg",
    description:
      "Sharp, thyme-like flavor with digestive benefits."
  },
  {
    name: "Sesame Seeds (Til)",
    image: "/images/til.jpeg",
    description:
      "Rich in calcium and healthy fats, perfect for sweets and snacks."
  },
  {
    name: "Psyllium Husk (Isabgol)",
    image: "/images/isabgol.jpeg",
    description:
      "Psyllium husk is a natural dietary fiber widely used for digestive health."
  },
  {
    name: "Flax Seeds (Alsi)",
    image: "/images/flax.jpeg",
    description:
      "Flax seeds are rich in omega-3 fatty acids, fiber, and antioxidants."
  },
  {
    name: "Fenugreek Seeds (Methi)",
    image: "/images/fenugreek.jpeg",
    description:
      "Fenugreek seeds have a strong aroma and slightly bitter taste."
  },
  {
    name: "Coriander Seeds (Dhaniya)",
    image: "/images/dhaniya.jpeg",
    description:
      "Coriander seeds have a mild, citrusy flavor and are an essential ingredient in curries and spice blends."
  }
];

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <h2 className="head">Our Products</h2>

        <p className="intro">
          At Kalash Spices, we offer premium-quality whole spices that are
          hygienically processed and packed.
        </p>

        <div className="products-grid">
  {products.map((product, index) => (
    <ProductCard
      key={index}
      name={product.name}
      image={product.image}
      description={product.description}
    />
  ))}
</div>

      </main>

      <Footer />
    </>
  );
}
