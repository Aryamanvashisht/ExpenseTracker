type Transactions = {
  id: number;
  text: string;
  amount: number;
};

type Tstate = {
  transactions: Transactions[];
};

type Taction =
  | { type: "Add_transaction"; payload: Transactions }
  | { type: "Delete_transaction"; payload: number };

const reducer = (state: Tstate, action: Taction) => {
  switch (action.type) {
    case "Delete_transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (Transaction) => Transaction.id !== action.payload
        ),
      };
    case "Add_transaction":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default reducer;
