"use client";

import { useState } from "react";
import QuoteForm from "@/components/quoteform";
import { generateQuote } from "@/lib/generatequotes"; // 🧠 Uses Ollama locally

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (topic: string) => {
    setLoading(true);
    setError("");
    setQuote("");

    try {
      const result = await generateQuote(topic);
      setQuote(result);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating the quote.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-white p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">
        Quote Generator
      </h1>

      <QuoteForm onSubmit={handleSubmit} />

      {/* 🔄 Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}

      {/* ⚠️ Error Message */}
      {error && (
        <div className="mt-6 mx-auto max-w-md bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* 💬 Display the LLaMA-generated Quote */}
      {quote && (
        <div className="mt-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center animate-fadeIn">
          <p className="text-xl italic text-gray-800">“{quote}”</p>
        </div>
      )}
    </main>
  );
}
