import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
};
