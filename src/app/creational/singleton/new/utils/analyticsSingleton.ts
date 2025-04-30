class AnalyticsTracker {
  private static instance: AnalyticsTracker;
  private constructor(private readonly userId: string) {
    console.log("✅ AnalyticsTracker created for:", userId);
  }

  static getInstance(userId: string): AnalyticsTracker {
    if (!AnalyticsTracker.instance) {
      AnalyticsTracker.instance = new AnalyticsTracker(userId);
    }
    return AnalyticsTracker.instance;
  }

  track(event: string) {
    console.log(`[${this.userId}] Tracked:`, event);
  }
}

export default AnalyticsTracker;
