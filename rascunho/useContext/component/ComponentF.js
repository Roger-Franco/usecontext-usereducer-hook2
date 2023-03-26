import React from 'react'
import { SonContext, UserContext } from '../App'

export const ComponentF = () => {
  console.log(UserContext.Consumer);
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return <div>  {user}</div>
          }
        }
      </UserContext.Consumer>
      <SonContext.Consumer>
        {
          user => {
            return <div>  {user}</div>
          }
        }
      </SonContext.Consumer>

      <p>----------</p>
      <UserContext.Consumer>
        {
          user => {
            return (
              <SonContext.Consumer>
        {
          son => {
            return <div> Pai: {user}, Filho: {son}</div>
          }
        }
      </SonContext.Consumer>
            ) 
          }
        }
      </UserContext.Consumer>
      
      ComponentF
    </div>
  )
}
