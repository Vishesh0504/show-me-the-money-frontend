"use server";

import { API_CONFIG } from "@/lib/config";

export type HelloWorldResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function getHelloWorld(): Promise<HelloWorldResponse> {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.endpoints.hello}`;
    console.log(`Fetching from: ${url}`);

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      return { error: `Failed to fetch: ${res.status} ${res.statusText}` };
    }

    // The Java code returns a plain string "Hello World!"
    const text = await res.text();

    // We wrap it in an object to keep the frontend usage consistent/clean
    return { message: text };
  } catch (error) {
    console.error("Error fetching hello world:", error);
    return { error: "Failed to connect to API" };
  }
}
