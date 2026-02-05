"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createTransaction(formData: FormData) {
  const supabase = await createClient();

  const amount = Number(formData.get("amount"));
  const description = formData.get("description") as string | null;

  if (!amount) {
    throw new Error("Amount is required");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase.from("transactions").insert({
    user_id: user.id,
    amount,
    description,
  });

  if (error) {
    throw new Error(error.message);
  }

  // re-render page with new data
  redirect("/transactions");
}
