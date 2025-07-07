"use client";
import { useEffect, useState } from "react";

export default function Themer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-end mb-4">
      <select
        className="select select-bordered"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">🌞 Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="cupcake">🧁 Cupcake</option>
        <option value="dracula">🧛 Dracula</option>
      </select>
    </div>
  );
}
