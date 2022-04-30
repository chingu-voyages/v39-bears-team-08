import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const ExpensesChart = () =>{

    return(
        <div>
            <Doughnut 
                data={{
                    labels: ['Groceries', 'Restaurant', 'BarCafe', 'Rent', 'Utilities', 'Insurances', 'Fuel', 'Entertainment', 'Communication'],
                }}
            />
        </div>
    )
}