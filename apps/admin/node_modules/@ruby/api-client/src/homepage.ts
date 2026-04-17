import type { HomepagePayload } from "@ruby/types/homepage";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api/v1";

export async function getHomepage(): Promise<HomepagePayload> {
  const response = await fetch(`${API_BASE_URL}/homepage`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch homepage payload");
  }

  return response.json();
}
