import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  return res.json();
};
