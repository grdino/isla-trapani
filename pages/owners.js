import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLanguage } from '../lib/useLanguage';
import { getNews, getDocuments } from '../lib/googleSheets';
import { useState } from 'react';

export default function Owners() {
  const { t } = useLanguage();

// Allowed HOA payment years
const YEARS = [2023, 2024, 2025];

// Default to highest year
const [yearIndex, setYearIndex] = useState(YEARS.length - 1);
const year = YEARS[yearIndex];

// Navigation functions
const prevYear = () => {
  if (yearIndex > 0) setYearIndex(yearIndex - 1);
};
const nextYear = () => {
  if (yearIndex < YEARS.length - 1) setYearIndex(yearIndex + 1);
};

// Build HOA PDF URLs
const bankHref = (mm) => `/owners-docs/hoa/bank_${year}-${mm}.pdf`;
const adminHref = (mm) => `/owners-docs/hoa/admin_${year}-${mm}.pdf`;

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

         {/* Year selector (between the lines, after the heading) */}
          <div className="year-nav">
            <button onClick={prevYear} disabled={yearIndex === 0}>‹</button>
            <span className="year-value">{year}</span>
            <button onClick={nextYear} disabled={yearIndex === YEARS.length - 1}>›</button>
          </div>

         <hr className="full-line" />

          <table className="responsive-table">
            <thead>
              <tr>
                <th>{year}</th>
                <th>{t("tt_bank")}</th>
                <th>{t("tt_admin")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={String(year)}>{t("jan")}</td>
                <td data-label={t("tt_bank")}><a href={bankHref("01")} target="_self">{t("td_link")}</a></td>
                <td data-label={t("tt_admin")}><a href={adminHref("01")} target="_self">{t("td_link")}</a></td>
              </tr>
              <tr>
                <td data-label={String(year)}>{t("feb")}</td>
                <td data-label={t("tt_bank")}><a href={bankHref("02")} target="_self">{t("td_link")}</a></td>
                <td data-label={t("tt_admin")}><a href={adminHref("02")} target="_self">{t("td_link")}</a></td>
              </tr>
              <tr>
                <td data-label={String(year)}>{t("mar")}</td>
                <td data-label={t("tt_bank")}><a href={bankHref("03")} target="_self">{t("td_link")}</a></td>
                <td data-label={t("tt_admin")}><a href={adminHref("03")} target="_self">{t("td_link")}</a></td>
              </tr>
              <tr>
                <td data-label={String(year)}>{t("apr")}</td>
                <td data-label={t("tt_bank")}><a href={bankHref("04")} target="_self">{t("td_link")}</a></td>
                <td data-label={t("tt_admin")}><a href={adminHref("04")} target="_self">{t("td_link")}</a></td>
              </tr>
              <tr>
                <td data-label={String(year)}>{t("may")}</td>
                <td data-label={t("tt_bank")}><a href={bankHref("05")} target="_self">{t("td_link")}</a></td>
                <td data-label={t("tt_admin")}><a href={adminHref("05")} target="_self">{t("td_link")}</a></td>
              </tr>
              <tr>
                <td data-label={String(year)}>{t("jun")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">No Disponible / Not Available</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">No Disponible / Not Available</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("jul")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">No Disponible / Not Available</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">No Disponible / Not Available</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("aug")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">NA</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">NA</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("sep")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">NA</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">NA</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("oct")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">NA</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">NA</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("nov")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">NA</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">NA</div></td>
              </tr>

              <tr>
                <td data-label={String(year)}>{t("dec")}</td>
                <td data-label={t("tt_bank")}><div className="no-hay-text">NA</div></td>
                <td data-label={t("tt_admin")}><div className="no-hay-text">NA</div></td>
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
