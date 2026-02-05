import { createClient } from "@/lib/supabase/server";

export default async function TransactionsPage() {
  const supabase = await createClient();

  const { data: transactions, error } = await supabase
    .from("transactions")
    .select("id, amount, description, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main>
      <h1>Transactions</h1>

      {transactions.length === 0 && <p>No transactions yet.</p>}

      <ul>
        {transactions.map((transactions) => (
          <li key={transactions.id}>
            <strong>{transactions.amount}</strong> — {transactions.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
