import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { useParams } from 'react-router-dom';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const ExpensesChart = () =>{
    const [chart, setChart] = useState([])

    const expensesURL = "http://localhost:5000/budget/1"

    useEffect(()=> {
        const fetchExpenses = async () => {
            await fetch(`http://localhost:5000/budget/1`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-origin': '*'
                }
            }).then((response) =>{response.json()
              .then((expensesData) => {
                  console.log(expensesData.data)
                  setChart(expensesData.data)
              })
            }).catch(error => {
                console.log(error)
            })
        }
        fetchExpenses()
    }, [expensesURL])

    return(
        <div>
            <Doughnut 
                data={{
                    // labels: console.log(chart.map(item => item.rent)),
                    // labels: ['Groceries', 'Restaurant', 'BarCafe', 'Rent', 'Utilities', 'Insurances', 'Fuel', 'Entertainment', 'Communication'],
                    //   labels:  Object.keys(chart),
                       labels:  Object.keys(chart),
                      //labels:  Object.entries(chart).filter(([key, _]) => key !== "userid"),
                    datasets: [
                        {
                          label: '# of Expenses',
                          data: Object.values(chart),
                          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(128, 0, 128, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(199, 21, 133, 0.2)',
                            'rgba(188, 143, 143, 0.2)',
                          ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(199, 21, 133, 1)',
                            'rgba(188, 143, 143, 1)',
                          ],
                          borderWidth: 0.5,
                        },
                      ],
                    }}
                    height={400}
                    width={600}
                    options={{
                     maintainAspectRatio: false,
                     scales: {
                     yAxes: [
                        {
                        ticks: {
                            beginAtZero: true,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontSize: 25,
                    },
                },
            }}
        />
    </div>
    )
}

export default ExpensesChart