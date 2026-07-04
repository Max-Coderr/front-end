const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export function formatAssetUrl(rawPath: string | null | undefined): string {
  if (!rawPath) return "";
  if (rawPath.startsWith("http")) return rawPath;
  return `${BASE_API_URL}/${rawPath.replace(/\\/g, "/")}`;
}
