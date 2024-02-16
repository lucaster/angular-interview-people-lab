export interface Film {
  readonly title: string;
  readonly director: string;
  readonly producer: string;
  /**
   * YYYY-MM-DD
   */
  readonly release_date: string;
  readonly episode_id: number;
  readonly opening_crawl: string;
  /**
   * URLs
   */
  readonly characters: string[];
}
