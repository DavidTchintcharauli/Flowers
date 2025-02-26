"use server";

import { createClient } from "../utils/supabase/server";

export async function getProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, image_url") 
    .order("created_at", { ascending: false });

  if (error) {
    console.error("🛑 პროდუქტების წამოღების შეცდომა:", error.message);
    return [];
  }

  const products = data.map((product) => ({
    ...product,
    image_url: product.image_url?.replace("/sign/", "/public/"),
  }));

  return products;
}
