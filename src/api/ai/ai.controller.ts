import { GoogleGenerativeAI } from '@google/generative-ai';
import { Request, Response } from 'express';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export const generateSubjectLines = async (req: Request, res: Response) => {
  const { emailBody } = req.body;

  if (!emailBody) {
    return res.status(400).json({ message: 'Email body is required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are an expert copywriter. Based on the following email body, generate 3 compelling and concise subject lines. Return them as a JSON array of strings. For example: ["Subject 1", "Subject 2", "Subject 3"]. Email Body: ${emailBody}`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    const jsonResponse = text.replace('```json', '').replace('```', '').trim();

    const subjectLines = JSON.parse(jsonResponse);

    res.status(200).json({ suggestions: subjectLines });
  } catch (error) {
    console.error('Error generating subject lines:', error);
    res.status(500).json({ message: 'Failed to generate subject lines' });
  }
};
