// lib/googleSheets.ts
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

function getSheetsClient() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    SCOPES
  );
  return google.sheets({ version: 'v4', auth });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

type Row = (string | number | boolean | null | undefined)[];

async function getRange(range: string) {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueRenderOption: 'UNFORMATTED_VALUE',
    dateTimeRenderOption: 'FORMATTED_STRING',
  });
  return (res.data.values || []) as Row[];
}

// ---------- Public API your page imports ----------

export type NewsItem = { id: string; date: string; text_en: string; text_es: string };
export async function getNews(): Promise<NewsItem[]> {
  const rows = await getRange('News!A2:E'); // id, date, text_en, text_es, visible
  return rows
    .filter(r => String(r[4]).toLowerCase() !== 'false') // visible
    .map(r => ({
      id: String(r[0]),
      date: String(r[1] ?? ''),
      text_en: String(r[2] ?? ''),
      text_es: String(r[3] ?? ''),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type DocumentRow = {
  date: string;
  type: 'bylaws' | 'bank' | 'admin' | 'other';
  title_en: string;
  title_es: string;
  url_en?: string;
  url_es?: string;
};
export async function getDocuments(): Promise<DocumentRow[]> {
  const rows = await getRange('Documents!A2:G');
  return rows
    .filter(r => String(r[6]).toLowerCase() !== 'false') // visible
    .map(r => ({
      date: String(r[0] ?? ''),
      type: (String(r[1] ?? 'other') as DocumentRow['type']),
      title_en: String(r[2] ?? ''),
      title_es: String(r[3] ?? ''),
      url_en: r[4] ? String(r[4]) : undefined,
      url_es: r[5] ? String(r[5]) : undefined,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type AssemblyRow = {
  date: string;
  meeting_type: 'agm' | 'ext' | 'other';
  url_en?: string;
  url_es?: string;
  minutes_en?: string;
  minutes_es?: string;
};
export async function getAssemblies(): Promise<AssemblyRow[]> {
  const rows = await getRange('Assemblies!A2:G');
  return rows
    .filter(r => String(r[6]).toLowerCase() !== 'false') // visible
    .map(r => ({
      date: String(r[0] ?? ''),
      meeting_type: (String(r[1] ?? 'other') as AssemblyRow['meeting_type']),
      url_en: r[2] ? String(r[2]) : undefined,
      url_es: r[3] ? String(r[3]) : undefined,
      minutes_en: r[4] ? String(r[4]) : undefined,
      minutes_es: r[5] ? String(r[5]) : undefined,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type Payment = { year: number; month: string; type: 'bank' | 'admin'; url: string };
export async function getPayments(): Promise<Payment[]> {
  const rows = await getRange('HOA_Payments!A2:D');
  return rows.map(r => ({
    year: Number(r[0]),
    month: String(r[1]).padStart(2, '0'),
    type: String(r[2]) as Payment['type'],
    url: String(r[3]),
  }));
}
