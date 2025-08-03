
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <img src="/homepage-pic.png" alt="Hero" style={{ maxWidth: '100%' }} />
        <p>Welcome to Isla Trapani, a beautiful neighborhood in AltaVela II.</p>
        <Link href="/owners">Homeowner's Resources</Link>
      </div>
    </Layout>
  );
}
