import LogoSVG from '../svg/logo.svg'
// for whatever reason import react allows the svg to work...
import React from 'react'
import Button from './Button'


const Nav = () => (
    <nav className="flex justify-between">
        <div>
            <h1 className="">!Keep Schtum</h1>
        </div>
        <div className="w-16">
            <LogoSVG />
        </div>
        <div>
            <Button title={'login'}/>
        </div>
    </nav>

)

export default Nav;