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

  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ padding: '20px' }}>
         <hr className="full-line" />
          <h2>{t("owners_news")}</h2>
         <hr className="full-line" />
          <ul>
            {news.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>

         {/* ------------------------------------- */}
         {/* New Section: Documentos / Documents   */}
         {/* ------------------------------------- */}
         <br />
         <hr className="full-line" />
          <h2>{t("owners_docs")}</h2>
         <hr className="full-line" />

         <table className="responsive-table">
           <thead>
             <tr>
               <th rowSpan="2">
                <strong>{t("tt_date")}</strong>{" "}
                <span className="date-format">{t("tt_date_fmt")}</span>
               </th>
               <th rowSpan="2">{t("tt_doc_type")}</th>
               <th colSpan="2">{t("tt_links")}</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td data-label={t("tt_date")}>2024-09-07</td>
               <td data-label="Typo de Doc&#10;/ Doc Type">
                Reglamentos<br />Bylaws
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/reglamentos.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/bylaws.pdf">English</a>
               </td>
             </tr>
           </tbody>
         </table>

         {/* ------------------------------------- */}
         {/* New Section: Asambleas / Assemblies   */}
         {/* ------------------------------------- */}
         <br /> <br />
         <hr className="full-line" />
         <h2>{t("assemblies")}</h2>
         <hr className="full-line" />

         <table className="responsive-table">
           <thead>
             <tr>
               <th rowSpan="2">
                 Fecha <span className="date-format">(AAAA/MM/DD)</span><br />
                 Date <span className="date-format">(YYYY/MM/DD)</span>
               </th>
               <th rowSpan="2">Tipo de Reunión<br />Type of Meeting</th>
               <th colSpan="2">Documentos<br />Documents</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td data-label="Fecha&#10;/ Date">2025-07-05</td>
               <td data-label="Reunión&#10;/ Meeting">
                Asamblea Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2025-07-05-esp.pdf">Español</a>
                 <div className="no-hay-text">No Hay Acta Todavia</div>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
                 <div className="no-hay-text">No Minutes Available </div>
               </td>
             </tr>
             <tr>
                <td data-label="Fecha&#10;/ Date">2024-12-21</td>
                <td data-label="Reunión&#10;/ Meeting">
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
               <td data-label="Fecha&#10;/ Date">2024-09-07</td>
               <td data-label="Reunión&#10;/ Meeting">
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
               <td data-label="Fecha&#10;/ Date">2024-06-15</td>
               <td data-label="Reunión&#10;/ Meeting">
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
               <td data-label="Fecha&#10;/ Date">2023-11-11</td>
               <td data-label="Reunión&#10;/ Meeting">
                 Asamblea Ordinaria<br />Ordinary Meeting
               </td>
               <td data-label="Documentos">
                 <a href="/owners-docs/combined-2023-11-11-esp.pdf">Español</a>
               </td>
               <td data-label="Documents">
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
           </tbody>
         </table>

         {/* ------------------------------------- */}
         {/* New Section: Cuotas / HOA Payments    */}
         {/* ------------------------------------- */}
         <br />
         <br />
         <hr className="full-line" />
         <h2>{t("hoa_payments")}</h2>
         <hr className="full-line" />

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
                  <a href="/owners-docs/hoa/bank_2025-01.pdf" target="_self">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/hoa/admin_2025-01.pdf" target="_self">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Febrero&#10;/February</td>
                <td data-label="Banco&#10;/Bank">
                  <a href="/owners-docs/hoa/bank_2025-02.pdf" target="_self">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/hoa/admin_2025-02.pdf" target="_self">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Marzo&#10;/March</td>
                <td data-label="Banco&#10;/Bank">
                  <a href="/owners-docs/hoa/bank_2025-03.pdf" target="_self">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/hoa/admin_2025-03.pdf" target="_self">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Abril&#10;/April</td>
                <td data-label="Banco&#10;/Bank">
                  <a href="/owners-docs/hoa/bank_2025-04.pdf" target="_self">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/hoa/admin_2025-04.pdf" target="_self">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Mayo&#10;/May</td>
                <td data-label="Banco&#10;/Bank">
                  <a href="/owners-docs/hoa/bank_2025-05.pdf" target="_self">
                    Link
                  </a>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <a href="/owners-docs/hoa/admin_2025-05.pdf" target="_self">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Junio&#10;/June</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                  <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Julio&#10;/July</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Agosto&#10;/August</td>
                <td data-label="Banco&#10;/Bank">
                <div className="no-hay-text">NA</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Septiembre&#10;/September</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Octubre&#10;/October</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Noviembre&#10;/November</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">Diciembre&#10;/December</td>
                <td data-label="Banco&#10;/Bank">
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label="Admon&#10;/Admin">
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProtectedRoute>

      <style jsx>{`
        .responsive-table {
          width: 85%;
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
