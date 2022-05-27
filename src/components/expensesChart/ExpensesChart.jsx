import React, { useState, useContext, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';
import { Context } from '../../Context';

ChartJS.register(Tooltip, Legend, ArcElement);

const ExpensesChart = ({ props }) => {
  const [chart, setChart] = useState([]);
  const [fieldAmount, setFieldAmount] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const { selectedChart, budgetList } = useContext(Context);

  let totalBudgetedAmount;

  for (let budget of budgetList) {
    console.log(budget[1], selectedChart);
    if (budget[1] === Number(selectedChart)) {
      totalBudgetedAmount = budget[2];
      console.log('line 24:', totalBudgetedAmount);
      break;
    }
  }

  const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(128, 0, 128, 0.2)',
    'rgba(120, 15, 72, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(199, 21, 133, 0.2)',
  ];

  console.log('selectedChart', selectedChart);

  useEffect(() => {
    const fetchExpenses = async () => {
      await fetch(`http://localhost:5000/budget/${selectedChart}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-origin': '*',
        },
      })
        .then((response) => {
          response.json().then((expensesData) => {
            console.log(expensesData);
            setChart(expensesData.data);
            setTotalExpense(expensesData.totalexpenses);
            setFieldAmount(expensesData.amount);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchExpenses();
  }, [selectedChart]);

  console.log(totalExpense);
  console.log(totalBudgetedAmount);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {totalExpense > totalBudgetedAmount ? (
          <div>OVERBUDGETED</div>
        ) : (
          <div>UNDERBUDGETED</div>
        )}
      </div>
      <div style={{ height: 10 }}>
        <Doughnut
          data={{
            // labels: console.log(chart.map(item => item.rent)),
            // labels: ['Groceries', 'Restaurant', 'BarCafe', 'Rent', 'Utilities', 'Insurances', 'Fuel', 'Entertainment', 'Communication'],
            //   labels:  Object.keys(chart),
            labels: Object.keys(chart),
            //labels:  Object.entries(chart).filter(([key, _]) => key !== "userid"),
            datasets: [
              {
                label: '# of Expenses',
                data: Object.values(chart),
                backgroundColor: backgroundColors.slice(0, fieldAmount),
              },
            ],
          }}
          height={40}
          width={60}
          options={{
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ExpensesChart;
