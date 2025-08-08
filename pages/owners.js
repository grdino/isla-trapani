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
    { id: 1, name: "Bylaws - Eng", path: "/owners-docs/bylaws.pdf" },
    { id: 2, name: "Reglamentos - Esp", path: "/owners-docs/reglamentos.pdf" }
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
               <th colSpan="2">Documentos<br />Documents</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td data-label="Fecha&#10;Date">2023-11-11</td>
               <td data-label="Reunión&#10;/Meeting">
                 Asamblea Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2023-11-11-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2024-06-15</td>
               <td data-label="Reunión&#10;/Meeting">
                 Asamblea Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2024-06-15-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2024-09-07</td>
               <td data-label="Reunión&#10;/Meeting">
                 Asamblea Extraordinaria<br />Extraordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2024-09-07-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2024-12-21</td>
               <td data-label="Reunión&#10;/Meeting">
                 Asamblea Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2024-12-21-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label="Fecha&#10;Date">2025-07-05</td>
               <td data-label="Reunión&#10;/Meeting">
                No Disponible<br />Not Available
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2025-07-05-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
           </tbody>
         </table>

          {/* New Section: Asambleas / Assemblies */}
          <h2>Bank Statements / Admin Reports</h2>

          <table className="responsive-table">
            <thead>
              <tr>
                <th>2025</th>
                <th>Cuenta De Banco<br />Bank Statement</th>
                <th>Informe de Admon<br />Admin Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="2025">Enero&#10;/January</td>
                <td data-label="Banco&#10;/Bank">
                  <a href="/owners-docs/bank-2025-01.pdf" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/admin-2025-01.pdf" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
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
