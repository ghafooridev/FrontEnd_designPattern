export class AnalyticsClient {
  constructor(private readonly userId: string) {
    console.log("✅ AnalyticsClient created");
  }

  track(event: string) {
    console.log(`[${this.userId}] Tracking:`, event);
  }
}
