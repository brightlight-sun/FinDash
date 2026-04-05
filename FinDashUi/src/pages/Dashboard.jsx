import BalanceTrendChart from "../components/BalanceTrendChart";
import SpendingPieChart from "../components/SpendingPieChart";
import SummaryCard from "../components/SummaryCard";
import { useSelector } from "react-redux";



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
        <div className="container-fluid">
            
            {/* summary cards */}
            <div className="row g-3">

                <div className="col-md-3">
                    <SummaryCard
                        title="Total Balance"
                        value={`₹${totalBalance}`}
                        color="text-primary"

                    />
                </div>

                <div className="col-md-3">
                    <SummaryCard
                        title="Income"
                        value={`₹${totalIncome}`}
                        color="text-success"

                    />
                </div>

                <div className="col-md-3">
                    <SummaryCard
                        title="Expenses"
                        value={`₹${totalExpenses}`}
                        color="text-danger"

                    />
                </div>

                <div className="col-md-3">
                    <SummaryCard
                        title="Savings %"
                        value={`${savingsPercentage}%`}
                        color="text-info"

                    />
                </div>

            </div>
            
            {/* pie chart */}
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