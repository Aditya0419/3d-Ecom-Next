import ProductCard from '@/components/ProductCard.jsx';
import Hero from '@/components/Hero';

export default function Home() {
  const products = [
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className='home'>
      <Hero />
      <h1>Welcome to BrandName</h1>
      <div className='productList'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
