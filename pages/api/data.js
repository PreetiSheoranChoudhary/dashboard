


export default async function handler(req, res) {
    try {
      const data = require('http://localhost:3303/data'); 
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  