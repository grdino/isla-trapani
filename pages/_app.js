
import '../styles/globals.css';
import { LanguageProvider } from '../lib/useLanguage';

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
