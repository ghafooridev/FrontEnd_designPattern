"use client";

import { useEffect } from "react";

import Header from "./component/Header";
import AnalyticsTracker from "./utils/analyticsSingleton";

export default function App() {
  useEffect(() => {
    const tracker = AnalyticsTracker.getInstance("user-123");
    tracker.track("PageView");
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-xl font-bold">Home Page</h1>
      </main>
    </>
  );
}
