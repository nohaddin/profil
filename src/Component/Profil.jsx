import React from 'react'
import './Profil.css'
import Name from './Name.jsx'
import Email from './Email.jsx'
import Address from './Address.jsx'
import Profosonialinfo from './Profosonialinfo.jsx'

const Profil = () => {
  return (
    <div className='nuhu'>
       <div className='one'>
       <Name/>
       <Profosonialinfo/>
       </div>
       <div className='two'>
        <Email/>
        <Address/>
       </div>
    </div>
  )
}

export default Profil