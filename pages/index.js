import Link from "next/link";
import { Button } from 'antd';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Quiz 12</h1>
      <p>Click below to view the product list.</p>
      <Link href="/products">
        <Button type="primary" size="large">Go to Products</Button>
      </Link>
    </div>
  );
}
