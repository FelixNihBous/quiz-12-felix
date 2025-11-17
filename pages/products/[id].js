import { useRouter } from 'next/router';
import { Card, Button, Breadcrumb } from 'antd';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 15.49 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 20.00 },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const breadcrumbItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Products',
      href: '/products',
    },
    {
      title: product.name,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Breadcrumb items={breadcrumbItems} style={{ marginBottom: '20px' }} />
      <Card
        title={product.name}
        extra={<Button onClick={() => router.back()}>Back</Button>}
      >
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
      </Card>
    </div>
  );
}
