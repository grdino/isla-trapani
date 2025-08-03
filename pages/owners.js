import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLanguage } from '../lib/useLanguage';
import { getNews, getDocuments } from '../lib/googleSheets';

export default function Owners() {
  const { t } = useLanguage();

  // Hardcoded sample data (will later pull from Google Sheets)
  const news = [
    { id: 1, text: "Next HOA meeting: August 12th, 6 PM at Clubhouse" },
    { id: 2, text: "Pool maintenance scheduled for August 20th" }
  ];

  const documents = [
    { id: 1, name: "Bylaws.pdf", path: "/owners-docs/bylaws.pdf" },
    { id: 2, name: "HOA-Rules.pdf", path: "/owners-docs/hoa-rules.pdf" }
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
