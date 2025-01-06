import ProductCard from '../../components/ProductCard';

export default function Products() {
  const products = [
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
