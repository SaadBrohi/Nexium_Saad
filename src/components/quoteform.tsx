"use client";
import { useState } from "react";

type Props = {
  onSubmit: (topic: string) => void;
};

export default function QuoteForm({ onSubmit }: Props) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(topic);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic..."
        className="input input-bordered w-full max-w-md"
      />
      <button type="submit" className="btn btn-primary">
        Generate
      </button>
    </form>
  );
}
