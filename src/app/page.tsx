"use client";

import Themer from "@/components/Themer";
import { useState } from "react";
import QuoteForm from "@/components/quoteform";

type Quote = {
  _id: string;
  content: string;
  author: string;
};

const fixedQuotes: Quote[] = [
  {
    _id: "1",
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    _id: "2",
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    _id: "3",
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    _id: "4",
    content:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    _id: "5",
    content:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (topic: string) => {
    setLoading(true);

    // simulate loading
    setTimeout(() => {
      const shuffled = [...fixedQuotes].sort(() => 0.5 - Math.random());
      setQuotes(shuffled.slice(0, 3)); // return 3 random quotes
      setLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-base-200 text-base-content p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">
        Quote Generator
      </h1>

      <QuoteForm onSubmit={handleSubmit} />

      {loading && (
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}

      <div className="mt-8 space-y-4">
        {quotes.map((quote) => (
          <div
            key={quote._id}
            className="p-6 bg-base-100 rounded-2xl shadow-xl"
          >
            <p className="text-xl italic">“{quote.content}”</p>
            <p className="text-right mt-4 font-semibold">— {quote.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
