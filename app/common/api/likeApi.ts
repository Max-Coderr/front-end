import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function switchCourseFavoriteStatus(sessionToken: string, courseId: number): Promise<void> {
  await axios.post(`${BASE_API_URL}/public/course-like/${courseId}`, {}, {
    headers: { Authorization: `Bearer ${sessionToken}` },
  });
}

export async function switchBookFavoriteStatus(sessionToken: string, bookId: number): Promise<void> {
  await axios.post(`${BASE_API_URL}/public/book-like/${bookId}`, {}, {
    headers: { Authorization: `Bearer ${sessionToken}` },
  });
}

export async function getLikedCourseKeys(sessionToken: string): Promise<Set<number>> {
  if (!sessionToken) return new Set();
  try {
    const { data } = await axios.get(`${BASE_API_URL}/public/course-like`, {
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
    const entries: { courseId?: number; id?: number }[] = Array.isArray(data) ? data : (data?.data ?? []);
    return new Set(entries.map((item) => item.courseId ?? item.id ?? 0).filter(Boolean));
  } catch {
    return new Set();
  }
}

export async function getLikedBookKeys(sessionToken: string): Promise<Set<number>> {
  if (!sessionToken) return new Set();
  try {
    const { data } = await axios.get(`${BASE_API_URL}/public/book-like`, {
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
    const entries: { bookId?: number; id?: number }[] = Array.isArray(data) ? data : (data?.data ?? []);
    return new Set(entries.map((item) => item.bookId ?? item.id ?? 0).filter(Boolean));
  } catch {
    return new Set();
  }
}
