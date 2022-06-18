import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function ChartRep({show}) {
  const {country, total, type} = show;
  const country1 = show.country || "india"
  const days = show.days || 120;
  console.log(days)
  const [chartdata, chartsetData] = React.useState([]);
  const [cases, setCases] = React.useState({});
  const [deaths, setDeaths] = React.useState({});
  const [recovered, setRecovered] = React.useState({});
  


  const [dates, setDates] = React.useState([]);
  const [casesType, setCasesType] = React.useState([]);


  React.useEffect(() => {
    setCases({})
    setDeaths({})
    setRecovered({})

  axios.get(`https://disease.sh/v3/covid-19/historical/${country1}?lastdays=${days}`)
  .then(res => {
    setCases(res.data.timeline.cases);
    setDeaths(res.data.timeline.deaths);
    setRecovered(res.data.timeline.recovered);
    chartsetData(res.data);

  }).catch(err => {
    console.log(err);
  })
  }, [show,days]);

    for(let key in cases){
      if(cases.hasOwnProperty(key)){
        dates.push(key);
        casesType.push(cases[key]);
      }
    }
    



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = dates;
  
  const datas = cases;
  
  const data = {
    labels : labels,

    datasets: [
      {
        label: 'Dataset 1',
        data: labels,
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },  
      {
        label: 'Active',
        data: datas,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Recovered',
        data: recovered,
        borderColor: 'rgb(255, 255, 0)',
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
      }, 
      {
        label: 'Death',
        data: deaths,
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'red',
      }, 
    ],
  };



  return( 
    <>
    <div className="chart">
    <Line data={data} options={options} />
    <Bar data={data} options={options} />
    </div>

  </>
  )
}
