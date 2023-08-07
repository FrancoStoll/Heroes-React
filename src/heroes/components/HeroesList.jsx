import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroesItem } from './HeroesItem'


export const HeroesList = ({publisher}) => {

const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])
  return (
    <>

    <div className='row rows-cols-1 row-cols-md-3 g3'> 
        {heroes.map(heroe => (
          <HeroesItem key={heroe.id} {...heroe} />
        ))}
    </div>


    </>
  )
}
