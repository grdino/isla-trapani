import Layout from '../components/Layout';
import { useState } from 'react';
import { login } from '../lib/auth';
import { useRouter } from 'next/router';
import { useLanguage } from '../lib/useLanguage';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { t } = useLanguage();

  async function handleSubmit(e) {
    e.preventDefault();

    // Call API route
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      login();
      router.push('/owners');
    } else {
      setError(t("incorrect_password"));
    }
  }

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h2>{t("login_title")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder={t("password_prompt")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <button type="submit">{t("login")}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </Layout>
  );
}