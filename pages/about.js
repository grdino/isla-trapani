
import Layout from '../components/Layout';
import { useLanguage } from '../lib/useLanguage';

export default function About() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h2>{t("about")}</h2>
        <p>{t("about_text")}</p>
      </div>
    </Layout>
  );
}
