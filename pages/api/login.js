export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = JSON.parse(req.body);

    // Compare with server-side environment variable
    if (password === process.env.OWNER_PSWD) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false });
    }
  }

  res.status(405).end(); // Method Not Allowed
}