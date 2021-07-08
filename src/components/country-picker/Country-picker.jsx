import React ,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from '@material-ui/core'
import Styles from './Countrypicker.module.css'
import {fetchCountries} from '../../api'

const Country=({handleCountryChange})=>{
const [fetchedCountries,setFetchedCountries]=useState([])

useEffect(() => {
const fetchAPI=async ()=>{
    //×Unhandled Rejection (TypeError): fetchCountries is not a function
    setFetchedCountries(await fetchCountries())
}
    fetchAPI()
}, [setFetchedCountries])



// console.log(fetchedCountries);
    return (
        <FormControl className={Styles.FormControl}>
            <NativeSelect defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value=''>Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}> {country}</option>)}
            </NativeSelect>
        </FormControl>
            )
}

export default Country