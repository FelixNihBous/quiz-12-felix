import { useRouter } from 'next/router';
import { Table, Button, Breadcrumb } from 'antd';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 15.49 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 20.00 },
];

export default function Products() {
  const router = useRouter();

  const breadcrumbItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Products',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => router.push(`/products/${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Breadcrumb items={breadcrumbItems} style={{ marginBottom: '20px' }} />
      <h1>Product List</h1>
      <Table dataSource={products} columns={columns} rowKey="id" />
    </div>
  );
}
