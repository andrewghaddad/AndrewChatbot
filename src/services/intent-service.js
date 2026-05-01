export async function genAIResponse(query) {
  if (!query) return;

  const apiUrl = `https://andrewprojectservices.netlify.app/.netlify/functions/query?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.message;
  } catch (err) {
    console.error("The sample encountered an error:", err);
  }
}

genAIResponse().catch((err) => {
  console.error("The sample encountered an error:", err);
});