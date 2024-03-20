import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import {Button } from './components/Button'
import { Searchbar } from './components/Searchbar'
import { useWeatherContext } from './context/Weathercontext'
import { useEffect } from 'react'

function App() {
  const weather = useWeatherContext()
  useEffect(()=>{
    weather.fetchCurrentUserLocation()
  },[])

  return (
  
      <>
      <Searchbar/>
      
      <Card  cityname = {weather.city} datacontent = {weather.data}/>
      <Button/>
      </>
  )
}

export default App
