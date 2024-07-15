import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Shared/Navigation/Navigation'

function Main() {
  return (
    <div>
        
        <main className='max-w-5xl mx-auto'>
        <Outlet/>
        </main>
        <nav className='max-w-5xl mx-auto'>
            <Navigation/>
        </nav>
    </div>
  )
}

export default Main