import { Transaction } from "@/types/Transaction";
import getTransactions from "@/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 w-full max-w-md mt-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">History</h2>
      <ul className="space-y-4">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;
