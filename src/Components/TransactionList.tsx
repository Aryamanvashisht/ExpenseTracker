import { useContext } from "react";
import { globalContext } from "../Context/Globalstate";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(globalContext);
  // const amount = transactions.map((transaction) => transaction.amount);
  // const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">History</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
