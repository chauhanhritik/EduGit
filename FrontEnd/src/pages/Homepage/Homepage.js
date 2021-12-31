import React from 'react'
import "./homepage.css"
import Sidemenu from './Sidemenu'
import Logoside from './Logoside'

export default function Homepage() {
    return (
        <div className='outermost'>
           <Logoside/>
           <Sidemenu/>
        </div>
    )
}
