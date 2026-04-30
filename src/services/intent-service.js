import OpenAI from "openai";
import { prompt } from "../prompts";

const token = process.env.REACT_APP_GITHUB_TOKEN || "";
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function genAIResponse(query) {
  if (query == null) return;
  
  const client = new OpenAI({ baseURL: endpoint, apiKey: token, dangerouslyAllowBrowser: true });

  const response = await client.chat.completions.create({
    messages: [
        { role:"system", content: prompt },
        { role:"user", content: query }
      ],
      temperature: 1,
      top_p: 1,
      model: model
    });

  return response.choices[0].message.content;
}

genAIResponse().catch((err) => {
  console.error("The sample encountered an error:", err);
});