import { Link } from "react-router-dom";
import type { Product } from "../types";
import { getSalePrice } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const salePrice = getSalePrice(product);

  return (
    <Link to={`/products/${product.id}`} className="card">
      <div className="card-img">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/500x500?text=No+Image";
          }}
        />
      </div>
      <p className="card-brand">{product.brand}</p>
      <p className="card-name">{product.name}</p>
      <p className="card-price">
        {product.discountRate > 0 && (
          <span className="card-rate">{product.discountRate}%</span>
        )}
        <strong>{salePrice.toLocaleString()}원</strong>
      </p>
    </Link>
  );
}
