// lib/googleSheets.js
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

function getSheetsClient() {
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  const auth = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    privateKey,
    SCOPES
  );

  return google.sheets({ version: 'v4', auth });
}

async function getRange(range) {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueRenderOption: 'UNFORMATTED_VALUE',
    dateTimeRenderOption: 'FORMATTED_STRING',
  });
  return res.data.values || [];
}

// ---- Public API (Documents only for now) ----
export async function getDocuments() {
  // Expecting columns: date | type | title_en | title_es | url_en | url_es | visible
  const rows = await getRange('Documents!A2:G');

  const docs = rows
    .filter((r) => String(r[6]).toLowerCase() !== 'false') // visible !== false
    .map((r) => ({
      date: String(r[0] ?? ''),
      type: String(r[1] ?? 'other'), // e.g. bylaws/bank/admin/other
      title_en: String(r[2] ?? ''),
      title_es: String(r[3] ?? ''),
      url_en: r[4] ? String(r[4]) : undefined,
      url_es: r[5] ? String(r[5]) : undefined,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

  return docs;
}
