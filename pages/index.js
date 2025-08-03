
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <img src="/homepage-pic.png" alt="Hero" style={{ maxWidth: '100%' }} />
        <h2>Welcome to Isla Trapani</h2>
        <p>Discover the beauty and community of Isla Trapani in Altavela II, Nayarit.</p>
        <p>Whether you are a resident or guest, we invite you to explore everything our community offers.</p>
        <Link href="/owners">Homeowner's Resources</Link>
      </div>
    </Layout>
  );
}
