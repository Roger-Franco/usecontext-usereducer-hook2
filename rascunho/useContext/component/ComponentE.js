import React, { useContext } from 'react'
import { ComponentF } from './ComponentF'
import { SonContext, UserContext } from '../App'


export const ComponentE = () => {
  const user = useContext(UserContext)
  const son = useContext(SonContext)
  return (
    <div>
      <ComponentF />
      <h1>{user} / {son}</h1>
      </div>
  )
}
