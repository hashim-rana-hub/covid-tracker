import React from 'react'
import {Cards,Chart,Country} from './components'
import Styles from './App.module.css'
import {fetch} from './api/'
import image from './image/COVID-19.jpg'

 class App extends React.Component {
     state={
         data:{},
         country: ''
     }
   async  componentDidMount() {
         const fetcheddata= await fetch()
        this.setState({data:fetcheddata})
     }

     handleCountryChange=async(country)=>{
        const fetcheddata= await fetch(country)
        this.setState({data:fetcheddata,country:country})

     }
    
    render() {
        const {data,country}=this.state
        return (
            <div className={Styles.container}>
                <img src={image} alt='covid-19' className={Styles.image} />
               <Cards data={data}/>
               <Country handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
