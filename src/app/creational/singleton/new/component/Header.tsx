"use client";

import AnalyticsTracker from "../utils/analyticsSingleton";

export default function Header() {
  const handleLogin = () => {
    const tracker = AnalyticsTracker.getInstance("userId_123");
    tracker.track("clickLogin");
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
