
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>{children}</main>
    </>
  );
}
