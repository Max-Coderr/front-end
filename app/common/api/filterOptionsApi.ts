import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface LookupOption {
  id: number;
  title: string;
}

export interface FilterCriteria {
  difficultyId: number | null;
  categoryId: number | null;
  languageId: number | null;
  rating: number | null;
}

export const DEFAULT_FILTER_STATE: FilterCriteria = {
  difficultyId: null,
  categoryId: null,
  languageId: null,
  rating: null,
};

async function queryLookupList(endpointPath: string): Promise<LookupOption[]> {
  try {
    const { data } = await axios.get(`${BASE_API_URL}${endpointPath}?size=200`);
    return Array.isArray(data) ? data : (data?.data ?? []);
  } catch {
    return [];
  }
}

export const getDifficultyLevels = () => queryLookupList("/public/difficulty");
export const getCourseCategories = () => queryLookupList("/public/courseCategory");
export const getBookCategories = () => queryLookupList("/public/bookCategory");
export const getLanguagesList = () => queryLookupList("/public/language");

export function buildFilterQueryParams(criteria: FilterCriteria) {
  const queryParams: Record<string, number> = {};
  if (criteria.difficultyId) queryParams.difficultyId = criteria.difficultyId;
  if (criteria.categoryId) queryParams.categoryId = criteria.categoryId;
  if (criteria.languageId) queryParams.languageId = criteria.languageId;
  if (criteria.rating) queryParams.rating = criteria.rating;
  return queryParams;
}
