export default function ProductCard({ name, image, description }) {
  return (
    <div className="product-card-grid">
      <img src={image} alt={name} className="product-img-grid" />

      <h3 className="product-title-grid">{name}</h3>

      <p className="product-desc-grid">
        {description}
      </p>
    </div>
  );
}
