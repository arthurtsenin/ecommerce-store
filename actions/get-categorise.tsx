import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  return res.json();
};
