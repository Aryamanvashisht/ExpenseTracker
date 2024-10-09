import { useState, useContext } from "react";
import { globalContext } from "../Context/Globalstate";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const { addTransaction, transactions } = useContext(globalContext);
   const amount2 = transactions.map((transaction) => transaction.amount);
   const total = amount2.reduce((acc, item) => (acc += item), 0).toFixed(2);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== '' && amount !== 0 && amount >= +total)
    {
      const newTransaction = {
        id: Date.now(),
        text,
        amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
    else {
       alert('Insufficient Balance')
       setText("");
       setAmount(0);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Add New Transaction
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Text input */}
        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-gray-600 font-medium mb-2"
          >
            Text
          </label>
          <input
            type="text"
            id="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter transaction name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Amount input */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-600 font-medium mb-2"
          >
            Amount <br />
            <span className="text-sm text-gray-500">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
