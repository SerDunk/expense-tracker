import getBalance from "@/actions/getBalance";
import addCommas from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <div className=" p-6 w-full max-w-sm text-center">
      <div className="uppercase text-gray-500 text-sm tracking-wider">
        Balance
      </div>
      <div className="text-4xl font-extrabold text-green-500 mt-2">
        ₹{addCommas(balance ?? 0)}
      </div>
    </div>
  );
};

export default Balance;
