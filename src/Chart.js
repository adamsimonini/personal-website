import React, { Component } from 'react';
import {Bubble} from 'react-chartjs-2';
import Selector from './Selector';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'Test Data',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x:10,y:20,r:5}]
    }
  ]
};

export default class Chart extends Component{
  render() {
    return (
      <div style={{width: "100%"}}>
        <h2>Crop Analysis</h2><Selector />      
        <Bubble 
            data={data}
            height={100}
            options={{
                maintainAspectRatio: true
            }}
        />
      </div>
    );
  }
};