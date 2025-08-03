
import Layout from '../components/Layout';
import { useState } from 'react';
import { login } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (login(password)) {
      router.push('/owners');
    } else {
      setError('Incorrect password');
    }
  }

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Owner Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </Layout>
  );
}
