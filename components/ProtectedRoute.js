import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isLoggedIn } from '../lib/auth';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    } else {
      setReady(true);
    }
  }, []);

  return ready ? children : null;
}
