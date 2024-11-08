import addCommas from "@/lib/utils";
import getIncomeExpense from "@/actions/getIncomeExpense";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className=" p-4 w-full max-w-sm mt-1 flex justify-between">
      <div className="flex flex-col items-center">
        <div className="text-gray-500 uppercase text-sm">Income</div>
        <div className="text-2xl font-bold text-green-500">
          ₹{addCommas(income ?? 0)}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-gray-500 uppercase text-sm">Expenses</div>
        <div className="text-2xl font-bold text-red-500">
          ₹{addCommas(expense ?? 0)}
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
