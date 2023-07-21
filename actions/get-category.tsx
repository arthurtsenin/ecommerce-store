import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-store",
  });

  return res.json();
};
