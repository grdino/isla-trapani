import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLanguage } from '../lib/useLanguage';
import { getNews, getDocuments } from '../lib/googleSheets';

export default function Owners() {
  const { t } = useLanguage();

  // Hardcoded sample data (will later pull from Google Sheets)
  const news = [
    { id: 1, text: "This feature to be used in the future." },
    { id: 2, text: "Esta función se utilizará en el futuro.." }
  ];

  const documents = [
    { id: 1, name: "2023 Bylaws - English", path: "/owners-docs/bylaws.pdf" },
    { id: 2, name: "2023 Reglamentos - Español", path: "/owners-docs/reglamentos.pdf" }
  ];

  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ padding: '20px' }}>
          <h2>{t("owners_news")}</h2>
          <ul>
            {news.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>

          <h2>{t("owners_docs")}</h2>
          <ul>
            {documents.map((doc) => (
              <li key={doc.id}>
                {doc.name} –{" "}
                <a
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  View
                </a>
                <a href={doc.path} download>
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ProtectedRoute>
    </Layout>
  );
}
