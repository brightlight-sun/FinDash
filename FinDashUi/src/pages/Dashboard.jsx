// main dashboard page that shows summary cards, balance trend chart and spending pie chart
// uses Redux to access transactions data and perform calculations for summary cards and charts
// also uses layout context to adapt to dark mode

import BalanceTrendChart from "../components/BalanceTrendChart";
import SpendingPieChart from "../components/SpendingPieChart";
import SummaryCard from "../components/SummaryCard";
import { useSelector } from "react-redux";
import "../styles/dashboard-layout.css";


const Dashboard = () => {

    const transactions = useSelector(
        (state) => state.transactions.list
    );

    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

    const savingsPercentage = totalIncome > 0 ? ((totalBalance / totalIncome) * 100).toFixed(2) : 0;


    return (
        <div className=" container-fluid">

            {/* summary cards */}
            <div className="row g-3">
                {/* income */}
                <div className="col-md-3">
                    <SummaryCard
                        title="Income"
                        value={`₹${totalIncome}`}
                        color="text-success"

                    />
                </div>

                {/* expenses */}
                <div className="col-md-3">
                    <SummaryCard
                        title="Expenses"
                        value={`₹${totalExpenses}`}
                        color="text-danger"

                    />
                </div>

                {/* balance (income - expense ) */}
                <div className="col-md-3">
                    <SummaryCard
                        title="Total Balance"
                        value={`₹${totalBalance}`}
                        color="text-primary"

                    />
                </div>

                {/* saving percentage */}
                <div className="col-md-3">
                    <SummaryCard
                        title="Savings %"
                        value={`${savingsPercentage}%`}
                        color="text-info"

                    />
                </div>

            </div>

            {/* graph + pie chart */}
            <div className="row g-3 mt-1">

                <div className="col-md-8">
                    <BalanceTrendChart />
                </div>

                <div className="col-md-4">
                    <SpendingPieChart />
                </div>

            </div>

        </div>
    )
}

export default Dashboard;