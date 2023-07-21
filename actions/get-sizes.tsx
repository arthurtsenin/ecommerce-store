import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  return res.json();
};
