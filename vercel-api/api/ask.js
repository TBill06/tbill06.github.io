import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export default async function handler(req, res) {
    // Set CORS headers for all responses (including OPTIONS)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    // Handle OPTIONS preflight request immediately
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
  
    // Only continue for POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      // Parse the request body
      const { message } = req.body;
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });

      const response = await ai.models.generateContentStream({
        model: "gemini-2.0-flash",
        contents: message,
      });

      for await (const chunks of response) {
        if (chunks.text) {
          res.write(`data: ${JSON.stringify({ text: chunks.text })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error('Error processing request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }