"use client";

import { useEffect } from "react";

import Header from "./component/Header";
import { AnalyticsClient } from "./utils/analyticsClient";

export default function App() {
  useEffect(() => {
    const client = new AnalyticsClient("user-123");
    client.track("PageView");
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
