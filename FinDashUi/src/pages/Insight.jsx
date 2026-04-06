// insights page component that shows insights and trends based on transactions data
// uses Redux to access transactions data and performs calculations for insights
// also uses layout context to adapt to dark mode

import { useSelector } from "react-redux";
import { useLayout } from "../context/LayoutContext";

const Insights = () => {

  const { darkMode } = useLayout();

  const transactions = useSelector(
    (state) => state.transactions.list
  );

  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );


  // Highest spending category
  const categoryTotals = {};

  expenses.forEach((t) => {

    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;

  });

  const highestCategory =
    Object.keys(categoryTotals).length === 0
      ? null
      : Object.keys(categoryTotals).reduce((a, b) =>
          categoryTotals[a] > categoryTotals[b] ? a : b
        );


  // Monthly comparison
  const monthlyTotals = {};

  transactions.forEach((t) => {

    const month = t.date.slice(0, 7);

    monthlyTotals[month] =
      (monthlyTotals[month] || 0) + t.amount;

  });


  const months = Object.keys(monthlyTotals);

  const latestMonth = months[months.length - 1];

  const previousMonth = months[months.length - 2];


  // Percentage change calculation
  let percentageChange = null;

  if (latestMonth && previousMonth) {

    percentageChange =
      (
        (
          monthlyTotals[latestMonth] -
          monthlyTotals[previousMonth]
        ) /
        monthlyTotals[previousMonth]
      ) * 100;

  }


  return (

    <div className="container-fluid">

      <h4 className={`mb-4 ${darkMode ? "text-light" : ""}`}>
        Insights Overview
      </h4>


      <div className="row g-3">


        {/* Highest Spending Category */}

        <div className="col-md-4">

          <div
            className={`card shadow-sm border-0 h-100 ${
              darkMode ? "bg-dark text-light" : ""
            }`}
          >

            <div className="card-body">

              <h6
                className={
                  darkMode
                    ? "text-light"
                    : "text-muted"
                }
              >
                Highest Spending Category
              </h6>

              <h3 className="text-danger fw-bold">

                {highestCategory || "No data"}

              </h3>

            </div>

          </div>

        </div>



        {/* Monthly Comparison */}

        <div className="col-md-4">

          <div
            className={`card shadow-sm border-0 h-100 ${
              darkMode ? "bg-dark text-light" : ""
            }`}
          >

            <div className="card-body">

              <h6
                className={
                  darkMode
                    ? "text-light"
                    : "text-muted"
                }
              >
                Monthly Comparison
              </h6>

              <h5 className="fw-semibold">

                {previousMonth
                  ? `Previous: ₹${monthlyTotals[previousMonth]}`
                  : "No previous month"}

              </h5>

              <h5 className="fw-semibold">

                {latestMonth
                  ? `Latest: ₹${monthlyTotals[latestMonth]}`
                  : "No latest month"}

              </h5>

            </div>

          </div>

        </div>



        {/* Observation Card */}

        <div className="col-md-4">

          <div
            className={`card shadow-sm border-0 h-100 ${
              darkMode ? "bg-dark text-light" : ""
            }`}
          >

            <div className="card-body">

              <h6
                className={
                  darkMode
                    ? "text-light"
                    : "text-muted"
                }
              >
                Observation
              </h6>


              {latestMonth && previousMonth ? (

                <h5
                  className={
                    percentageChange > 0
                      ? "text-danger fw-bold"
                      : "text-success fw-bold"
                  }
                >

                  {percentageChange > 0
                    ? `↑ Spending increased by ${percentageChange.toFixed(
                        1
                      )}%`
                    : `↓ Spending decreased by ${Math.abs(
                        percentageChange
                      ).toFixed(1)}%`}

                </h5>

              ) : (

                <p>
                  Not enough data to compare months
                </p>

              )}

            </div>

          </div>

        </div>


      </div>

    </div>

  );

};

export default Insights;