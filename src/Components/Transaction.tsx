import { useContext } from "react";
import { globalContext } from "../Context/Globalstate";
import { FaTrash } from "react-icons/fa";

type Props = {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
};

const Transaction = ({ transaction }: Props) => {
  const { deleteTransaction } = useContext(globalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li
      className={`flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm ${
        transaction.amount < 0
          ? "border-r-4 border-red-500"
          : "border-r-4 border-green-500"
      }`}
      key={transaction.id}
    >
      <span className="text-gray-700 font-medium">{transaction.text}</span>
      <div className="flex items-center space-x-4">
        <span
          className={`font-bold ${
            transaction.amount < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {sign}${Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button
          onClick={handleDelete}
          className="text-gray-400 hover:text-red-600 transition-colors duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
