export default function ProductDetails({ params }) {
    const { id } = params;
  
    // Mock product data
    const product = {
      id,
      title: `Product ${id}`,
      price: 29.99,
      description: 'This is a detailed description of the product.',
      image: 'https://via.placeholder.com/300',
    };
  
    return (
      <div style={{ padding: '1rem' }}>
        <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '300px' }} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
      </div>
    );
  }
  