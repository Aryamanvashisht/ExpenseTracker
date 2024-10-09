import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'
import { GlobalProvider } from './Context/Globalstate'

function App() {

  return (
    <GlobalProvider>
      <div className='m-2 w-[35%] ml-[30%] '>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App
