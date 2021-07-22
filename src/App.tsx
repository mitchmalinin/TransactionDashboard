//provider import
import { TransactionProvider } from "./context/TransactionContext"

//transaction layout import
import TransactionDashboard from "./components/Transactions/TransactionLayout/TransactionDashboard"

function App() {
  return (
    <TransactionProvider>
      <TransactionDashboard />
    </TransactionProvider>
  )
}

export default App
