"use client";

import { Transaction } from "@/types/Transaction";
import addCommas from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const isExpense = transaction.amount < 0;

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
      <span className="font-semibold text-gray-700">{transaction.text}</span>
      <span
        className={`text-lg font-bold ${
          isExpense ? "text-red-500" : "text-green-500"
        }`}
      >
        {isExpense ? "-" : "+"}₹{addCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="ml-4 p-1 rounded-full text-gray-600 hover:text-red-500"
      >
        <span className="text-xl font-bold">×</span>
      </button>
    </li>
  );
};

export default TransactionItem;
