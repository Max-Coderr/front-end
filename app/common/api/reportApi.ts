import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface ComplaintCategory {
  id: number;
  title: string;
  order: number;
}

export async function getComplaintCategories(): Promise<ComplaintCategory[]> {
  try {
    const { data } = await axios.get(`${BASE_API_URL}/public/reportCategory`);
    const entries: ComplaintCategory[] = Array.isArray(data) ? data : (data?.data ?? []);
    return entries.sort((first, second) => (first.order ?? 0) - (second.order ?? 0));
  } catch {
    return [];
  }
}

export async function dispatchComplaint(
  sessionToken: string,
  categoryId: number,
  targetType: string,
  targetId: number,
  descriptionText: string
): Promise<boolean> {
  try {
    await axios.post(
      `${BASE_API_URL}/public/report`,
      { categoryId, target: targetType, targetId, description: descriptionText },
      {
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
    return true;
  } catch {
    return false;
  }
}
