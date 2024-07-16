import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Shared/Navigation/Navigation'

function Main() {
  return (
    <div>
        
        <main className=''>
        <Outlet/>
        </main>
        <nav className=''>
            <Navigation/>
        </nav>
    </div>
  )
}

export default Main