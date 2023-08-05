import { Link, Outlet, useLocation } from 'react-router-dom'
import icon from '../F.get.svg'
import '../style/header.css'
import { useEffect, useState } from 'react'

function Header({width}){
    const param = useLocation()


    return(
        <>
            <div className = 'header' style = {{width:width + 'px',paddingLeft:width*6.6/100 +'px'}}>
                <Link to = '/'><img src = {icon} alt = 'F.get'  className='fget'/> </Link>
                <div className='text'>News</div>
                <div className='text'>Favorite</div>
                <div className='text'>TV-chanels</div>
                <div className='text'>Categorys</div>
                <div className='contact-login' style={{right:width*6.6/100 + 'px'}}>
                    <div className='text'>Contact</div>
                   {param.pathname === '/'? <Link to = '/login' style={{textDecoration:'none'}}><div className='login'>Log in</div></Link>:null}
                </div>
            </div>
            <Outlet />
        </>
    )
}


export default Header