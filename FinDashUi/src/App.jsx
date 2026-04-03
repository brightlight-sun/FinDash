import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// imports from layouts

import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Insights from './pages/Insight';

function App() {
  // const [count, setCount] = useState(0)

  return ( <div>
   <DashboardLayout>
      <Routes>
        <Route path="/" element={Dashboard} />
        <Route path="/transactions" element={Transactions} />
        <Route path="/insights" element={Insights} />

      </Routes>

   </DashboardLayout>
    </div>
  )
}

export default App
