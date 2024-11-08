import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div className="flex flex-col items-center min-h-screen mt-2 px-4">
      <div className="font-bold text-2xl text-slate-600 mb-8">
        Welcome, {user.firstName}
      </div>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}
