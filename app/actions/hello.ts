"use server";

import { headers } from "next/headers";
import { API_CONFIG } from "@/lib/config";

async function getRequestOrigin(): Promise<string> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");

  if (!host) {
    return "http://localhost:3000";
  }

  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");

  return `${protocol}://${host}`;
}

export type HelloWorldResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function getHelloWorld(): Promise<HelloWorldResponse> {
  try {
    const apiPath = `${API_CONFIG.BASE_URL}${API_CONFIG.endpoints.hello}`;
    const origin = await getRequestOrigin();
    const url = new URL(apiPath, origin).toString();
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
