import React,{useState,useEffect} from 'react'
import { fetchDailyData } from '../../api' 
import { Line,Bar } from 'react-chartjs-2'
import Styles from './Chart.module.css'

const Charts=({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData]=useState([])
    useEffect(() => {
        const fetchApi=async()=>{
        setDailyData(await fetchDailyData()) 
        }

        fetchApi()
        },[])

const lineChart=(
    dailyData.length
    ?( 
    <Line
         data={{
        labels:dailyData.map(({date})=>date),
        datasets:[{
            data:dailyData.map(({confirmed})=>confirmed),
            label:'Infected',
            borderColor: 'indigo',
            fill:true
        },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'red',
            backgroundColor:'rgba(255,0,0)',
            fill:true
        }]
    }} />):null
   
)


const Barchart=(
    confirmed?(
        <Bar 
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                labels:'People',
                backgroundColor:[
                    'rgba(0, 0, 255)',
                    'rgba(0,255, 0)',
                    'rgba(255,0, 0)'
                ],
                data:[confirmed.value,recovered.value,deaths.value]
            }]
        }}
    
        options={{
            legend:{display:false},
            title:{display:true,text:`Current state in ${country}`}
        }}
        />
    ):null
)

    return (
<div className={Styles.container}>
{!country?lineChart:Barchart}
</div>    )
}

export default Charts