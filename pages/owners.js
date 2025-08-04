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

          {/* New Section: Asambleas / Assemblies */}
          <h2>Asambleas / Assemblies</h2>

         <table className="responsive-table">
           <thead>
             <tr>
               <th rowSpan="2">Fecha<br />Date</th>
               <th rowSpan="2">Tipo de Reunión<br />Type of Meeting</th>
               <th colSpan="2">Convocatoria<br />Call</th>
               <th colSpan="2">Acta<br />Minutes</th>
             </tr>
             <tr>
               <th>Esp</th>
               <th>Eng</th>
               <th>Esp</th>
               <th>Eng</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td data-label="Fecha&#10;Date">2023-11</td>
               <td data-label="Tipo de Reunión&#10;Meeting Type">
                 Acta Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Convocatoria">
                 <a href="/owners-docs/call-2023-11-esp.pdf">Esp</a>
               </td>
               <td data-label="Call">
                 <a href="/owners-docs/call-2023-11-eng.pdf">Eng</a>
               </td>
               <td data-label="Acta">
                 <a href="/owners-docs/minutes-2023-11-esp.pdf">Esp</a>
               </td>
               <td data-label="Minutes">
                 <a href="/owners-docs/minutes-2023-11-eng.pdf">Eng</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2024-12</td>
               <td data-label="Tipo de Reunión&#10;Meeting Type">
                 Acta Extraordinaria<br />Extraordinary Meeting
               </td>
               <td data-label="Convocatoria">
                 <a href="/owners-docs/call-2024-12-esp.pdf">Esp</a>
               </td>
               <td data-label="Call">
                 <a href="/owners-docs/call-2024-12-eng.pdf">Eng</a>
               </td>
               <td data-label="Acta">
                 <a href="/owners-docs/minutes-2024-12-esp.pdf">Esp</a>
               </td>
               <td data-label="Minutes">
                 <a href="/owners-docs/minutes-2024-12-eng.pdf">Eng</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2025-07</td>
               <td data-label="Tipo de Reunión&#10;Meeting Type">??</td>
               <td data-label="Convocatoria"><a href="#">NA</a></td>
               <td data-label="Call"><a href="#">NA</a></td>
               <td data-label="Acta"><a href="#">NA</a></td>
               <td data-label="Minutes"><a href="#">NA</a></td>
             </tr>
           </tbody>
         </table>
        </div>
      </ProtectedRoute>

      <style jsx>{`
        .responsive-table {
          width: 100%;
          border-collapse: collapse;
          text-align: center;
          margin-top: 15px;
        }
        .responsive-table th,
        .responsive-table td {
          border: 1px solid #ccc;
          padding: 8px;
        }

        @media screen and (max-width: 768px) {
          .responsive-table,
          .responsive-table thead,
          .responsive-table tbody,
          .responsive-table th,
          .responsive-table tr {
            display: block;
            width: 100%;
          }

          .responsive-table thead {
            display: none;
          }

          .responsive-table tr {
            margin-bottom: 15px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 8px;
            background: #f9f9f9;
          }

          .responsive-table td {
            display: block;
            text-align: right;
            border: none;
            padding: 6px;
            position: relative;
          }

          .responsive-table td::before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            font-weight: bold;
            text-align: left;
            white-space: pre-line;
          }
        }
      `}</style>
    </Layout>
  );
}
