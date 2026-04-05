import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import { useSelector } from "react-redux";
import { useLayout } from "../context/LayoutContext";

const BalanceTrendChart = () => {

    const { darkMode } = useLayout();

    let runningBalance = 0;

    const transactions = useSelector(
        (state) => state.transactions.list
    );

    const data = transactions
        .map((t) => {

            if (t.type === "income") {
                runningBalance += t.amount;
            }
            else {
                runningBalance -= t.amount;
            }
            return {
                date: t.date,
                balance: runningBalance
            };
        })

        return (
            <div
                className={`card shadow-sm border-0 h-100 ${
                    darkMode ? "bg-dark text-light" : ""
                }`}
            >
        
                <div className="card-body">
        
                    <h6
                        className={darkMode ? "text-light" : "text-muted"}
                    >
                        Balance Trend
                    </h6>
        
                    <ResponsiveContainer width="100%" height={350}>
        
                        <LineChart data={data}>
        
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? "#555" : "#ccc"}
                            />
        
                            <XAxis
                                dataKey="date"
                                stroke={darkMode ? "#ddd" : "#333"}
                            />
        
                            <YAxis
                                stroke={darkMode ? "#ddd" : "#333"}
                            />
        
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: darkMode
                                        ? "#333"
                                        : "#fff",
                                    border: "none",
                                    color: darkMode
                                        ? "#fff"
                                        : "#000"
                                }}
                            />
        
                            <Line
                                type="monotone"
                                dataKey="balance"
                                stroke={darkMode ? "#4dabf7" : "#0d6efd"}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
        
                        </LineChart>
        
                    </ResponsiveContainer>
        
                </div>
        
            </div>
        );
}

export default BalanceTrendChart;