// src/lib/generateQuote.ts

export async function generateQuote(topic: string): Promise<string> {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3", // or whatever model you're running
      prompt: `Write a short, wise, original quote about ${topic}.`,
      stream: false,
    }),
  });

  const data = await res.json();
  return data.response?.trim() ?? "No quote generated.";
}
