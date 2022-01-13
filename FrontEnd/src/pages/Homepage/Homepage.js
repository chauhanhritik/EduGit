import React from 'react'
import "./homepage.css"
import Sidemenu from './Sidemenu'
import Logoside from './Logoside'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Homepage() {
    
    return (
        <div className='outermost'>
           <Logoside/>
           <Sidemenu/>
        </div>
    )
}
