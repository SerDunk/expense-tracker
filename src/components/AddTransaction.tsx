"use client";

import addTransaction from "@/actions/actions";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction Added");
    }
  };

  return (
    <div className=" p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-slate-500 mb-6">
        Add Transaction
      </h2>
      <form action={clientAction} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label
            htmlFor="text"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            id="text"
            type="text"
            name="text"
            placeholder="Enter description"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-slate-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="amount"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Amount{" "}
            <span className="text-xs text-gray-500">
              (negative for expense, positive for income)
            </span>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            step="0.01"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-slate-500 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
