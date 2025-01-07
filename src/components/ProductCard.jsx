import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>
        View 
      </Link>
    </div>
  );
};

export default ProductCard;
