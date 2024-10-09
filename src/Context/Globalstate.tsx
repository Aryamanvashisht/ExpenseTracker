import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.ts";

export type Transactions = {
  id: number;
  text: string;
  amount: number;
};

type state = {
  transactions: Transactions[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transactions) => void;
};

interface IProps {
  children: React.ReactNode;
}

const initialstate: state = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  deleteTransaction: () => { },
  addTransaction:()=>{}
};

export const globalContext = createContext<state>(initialstate);

export const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  function deleteTransaction(id: number) {
    dispatch({
      type: "Delete_transaction",
      payload: id,
    });
  }

  function addTransaction(transaction:Transactions) {
    dispatch({
      type: "Add_transaction",
      payload: transaction,
    });
  }

  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
