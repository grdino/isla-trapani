
import Layout from '../components/Layout';
import Link from 'next/link';
import { useLanguage } from '../lib/useLanguage';

export default function Home() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <img src="/homepage-pic.png" alt="Hero" style={{ width: '50%', maxWidth: '400px' }} />
        <p>{t("welcome")}</p>
        <Link href="/owners">{t("resources")}</Link>
      </div>
    </Layout>
  );
}
