import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const DcPages = () => {
  return (
    <>
        <h1>DC Comics</h1>
        <hr />
        
        <HeroesList  publisher='DC Comics'/>
    </>
  )
}
