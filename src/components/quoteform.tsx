"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QuoteForm({
  onSubmit,
}: {
  onSubmit: (topic: string) => void;
}) {
  const [topic, setTopic] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onSubmit(topic);
    setTopic("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-10 transition-all"
    >
      <Input
        placeholder="e.g. motivation"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button type="submit" className="w-full sm:w-auto">
        Generate
      </Button>
    </form>
  );
}
