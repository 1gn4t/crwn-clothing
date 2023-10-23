import React from "react";
import ProductCard from "../product-card/product-card.component";
import { PreviewContainer, Title, Preview } from "./category-preview.styles.jsx";
import { Link } from "react-router-dom";

export default function CategoryPreview({ title, products }) {
  return (
    <PreviewContainer>
      <Link to={title}>
        <h2>
          <Title>{title.toUpperCase()}</Title>
        </h2>
      </Link>
      <Preview>
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </PreviewContainer>
  );
}
