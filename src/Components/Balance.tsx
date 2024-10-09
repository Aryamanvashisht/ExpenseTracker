import { useContext } from "react";
import { globalContext } from "../Context/Globalstate";

const Balance = () => {
  const { transactions } = useContext(globalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="text-center mt-5">
      <h1 className="text-gray-500 text-lg uppercase tracking-wide">
        Your Balance
      </h1>
      <h4 className="font-bold text-4xl mt-2 text-gray-900">${+total >= 0? total:'Insufficient Balance'}</h4>
    </div>
  );
};

export default Balance;
