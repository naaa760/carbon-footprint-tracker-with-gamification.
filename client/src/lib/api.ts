const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function fetchWithAuth<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  activities: {
    list: () => fetchWithAuth("/activities"),
    create: (data: any) =>
      fetchWithAuth("/activities", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
  carbon: {
    getData: () => fetchWithAuth("/carbon"),
    getStats: () => fetchWithAuth("/carbon/stats"),
  },
};
