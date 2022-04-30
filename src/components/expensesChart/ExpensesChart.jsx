import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const ExpensesChart = () =>{

    return(
        <div>
            <Doughnut 
                data={{
                    labels: ['Groceries', 'Restaurant', 'BarCafe', 'Rent', 'Utilities', 'Insurances', 'Fuel', 'Entertainment', 'Communication'],
                    datasets: [
                        {
                          label: '# of Expenses',
                          data: [12, 19, 3, 5, 2, 3, 8, 14, 20],
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