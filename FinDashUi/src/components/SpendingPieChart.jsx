
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

import { transactions } from "../mockdata/transactions";

const COLORS = [
    "#0d6efd",
    "#198754",
    "#ffc107",
    "#dc3545",
    "#6f42c1"
];

const SpendingPieChart = () => {
    const expenses = transactions
        .filter((t) => t.type === "expense");

    const categoryTotals = {};
    expenses.forEach((t) => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    });

    const data = Object.keys(categoryTotals).map((category) => ({
        name: category,
        value: categoryTotals[category]
    })
    );

    return (
        <div className="card shadow-sm border-0 h-100">

            <div className="card-body">

                <h6 className="mb-3">Spending Breakdown</h6>

                <ResponsiveContainer width="100%" height={350}>

                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            label
                        >
                            {data.map((entry, index) =>
                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index % COLORS.length]
                                    }
                                />

                            )}

                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>

                </ResponsiveContainer>



            </div>
        </div>
    )
}

export default SpendingPieChart;
