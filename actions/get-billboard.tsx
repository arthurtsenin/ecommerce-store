import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLICK_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-store",
  });

  return res.json();
};
