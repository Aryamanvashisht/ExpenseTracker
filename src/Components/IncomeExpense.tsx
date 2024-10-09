import { useContext, useState, useEffect } from "react";
import { globalContext } from "../Context/Globalstate";

const IncomeExpense = () => {
  const { transactions } = useContext(globalContext);

  const [lastExpense, setLastExpense] = useState(0);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const currentExpense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  // Update expense only if total > currentExpense
  useEffect(() => {
    if (parseFloat(total) > parseFloat(currentExpense)) {
      setLastExpense(+currentExpense);
    }
  }, [total, currentExpense]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between mb-4">
        <div className="w-1/2 text-center">
          <h4 className="text-lg font-semibold text-gray-600">INCOME</h4>
          <p className="text-green-500 text-xl font-bold">${income}</p>
        </div>
        <div className="border-r-2 h-10 border-gray-300"></div>{" "}
        {/* Separator */}
        <div className="w-1/2 text-center">
          <h4 className="text-lg font-semibold text-gray-600">EXPENSE</h4>
          <p className="text-red-500 text-xl font-bold">${lastExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
