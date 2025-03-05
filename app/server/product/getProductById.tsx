"use server";

import { createClient } from "../../utils/supabase/server";

export async function getProductById(productId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, image_url")
    .eq("id", productId)
    .single();

  if (error) {
    console.error("პროდუქტის წამოღების შეცდომა:", error.message);
    return null;
  }

  return data;
}
