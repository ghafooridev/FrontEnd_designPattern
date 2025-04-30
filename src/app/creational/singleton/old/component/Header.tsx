"use client";

import { AnalyticsClient } from "../utils/analyticsClient";

export default function Header() {
  const handleLogin = () => {
    const client = new AnalyticsClient("user-123");
    client.track("clickLogin");
  };

  return (
    <header className="flex justify-between bg-gray-500 p-4">
      header
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleLogin}
      >
        log in
      </button>
    </header>
  );
}
