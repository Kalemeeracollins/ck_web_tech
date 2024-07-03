export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
     const { name, email, message } = req.body;

      console.log('Received form data:', { name, email, message });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).json({ success: false, error: 'Error processing form' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
