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
               <td data-label={t("tt_doc_type")}>
                {t("td_bylaws")}
               </td>
               <td data-label={t("td_link")}>
                 <a href="/owners-docs/reglamentos.pdf">Español</a>
               </td>
               <td data-label={t("td_link")}>
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
                <strong>{t("tt_date")}</strong>{" "}
                <span className="date-format">{t("tt_date_fmt")}</span>
               </th>
               <th rowSpan="2">{t("tt_meeting_type")}</th>
               <th colSpan="2">{t("tt_links")}</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td data-label={t("tt_date")}>2025-07-05</td>
               <td data-label={t("tt_meeting_type")}>
                {t("td_agm")}
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/combined-2025-07-05-esp.pdf">Español</a>
                 <div className="no-hay-text">No Hay Acta Todavia</div>
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/no-english-available.pdf">English</a>
                 <div className="no-hay-text">No Minutes Available </div>
               </td>
             </tr>
             <tr>
                <td data-label={t("tt_date")}>2024-12-21</td>
                <td data-label={t("tt_meeting_type")}>
                 {t("td_agm")}
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/combined-2024-12-21-esp.pdf">Español</a>
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label={t("tt_date")}>2024-09-07</td>
               <td data-label={t("tt_meeting_type")}>
                 {t("td_ext")}
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/combined-2024-09-07-esp.pdf">Español</a>
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>
             <tr>
               <td data-label={t("tt_date")}>2024-06-15</td>
               <td data-label={t("tt_meeting_type")}>
                 {t("td_agm")}
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/combined-2024-06-15-esp.pdf">Español</a>
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/no-english-available.pdf">English</a>
               </td>
             </tr>   
             <tr>
               <td data-label={t("tt_date")}>2023-11-11</td>
               <td data-label={t("tt_meeting_type")}>
                 {t("td_agm")}
               </td>
               <td data-label={t("tt_links")}>
                 <a href="/owners-docs/combined-2023-11-11-esp.pdf">Español</a>
               </td>
               <td data-label={t("tt_links")}>
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
                <th>{t("tt_bank")}</th>
                <th>{t("tt_admin")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="2025">{t("jan")}</td>
                <td data-label={t("tt_bank")}>
                  <a href="/owners-docs/hoa/bank_2025-01.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
                <td data-label={t("tt_admin")}>
                  <a href="/owners-docs/hoa/admin_2025-01.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("feb")}</td>
                <td data-label={t("tt_bank")}>
                  <a href="/owners-docs/hoa/bank_2025-02.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
                <td data-label={t("tt_admin")}>
                  <a href="/owners-docs/hoa/admin_2025-02.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("mar")}</td>
                <td data-label={t("tt_bank")}>
                  <a href="/owners-docs/hoa/bank_2025-03.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
                <td data-label={t("tt_admin")}>
                  <a href="/owners-docs/hoa/admin_2025-03.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("apr")}</td>
                <td data-label={t("tt_bank")}>
                  <a href="/owners-docs/hoa/bank_2025-04.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
                <td data-label={t("tt_admin")}>
                  <a href="/owners-docs/hoa/admin_2025-04.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("may")}</td>
                <td data-label={t("tt_bank")}>
                  <a href="/owners-docs/hoa/bank_2025-05.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
                <td data-label={t("tt_admin")}>
                  <a href="/owners-docs/hoa/admin_2025-05.pdf" target="_self">
                    {t("td_link")}
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("jun")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
                <td data-label={t("tt_admin")}>
                  <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("jul")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
                <td data-label={t("tt_admin")}>
                 <div className="no-hay-text">No Disponible / Not Available</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("aug")}</td>
                <td data-label={t("tt_bank")}>
                <div className="no-hay-text">NA</div>
                </td>
                <td data-label={t("tt_admin")}>
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("sep")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label={t("tt_admin")}>
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("oct")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label={t("tt_admin")}>
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("nov")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label={t("tt_admin")}>
                 <div className="no-hay-text">NA</div>
                </td>
              </tr>
              <tr>
                <td data-label="2025">{t("dec")}</td>
                <td data-label={t("tt_bank")}>
                 <div className="no-hay-text">NA</div>
                </td>
                <td data-label={t("tt_admin")}>
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
