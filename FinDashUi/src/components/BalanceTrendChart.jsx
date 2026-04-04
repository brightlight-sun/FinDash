import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import { transactions } from './../mockdata/transactions';

const BalanceTrendChart = () => {

    let runningBalance = 0;

    const data = transactions
                .map((t) => {

            if (t.type === "income") 
                { 
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
                <div className="card shadow-sm border-0 h-100">

                    <div className="card-body">

                        <h6 className="mb-3">Balance Trend</h6>

                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={data}>

                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />

                                <Line type="monotone"
                                    dataKey="balance"
                                    stroke="#0d6efd"
                                    strokeWidth={2}
                                />

                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            )
        }

export default BalanceTrendChart;