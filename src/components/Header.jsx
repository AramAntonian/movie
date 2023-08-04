import { Link, Outlet, useLocation } from 'react-router-dom'
import icon from '../F.get.svg'
import '../style/header.css'

function Header(){
    const param = useLocation()


    return(
        <>
            <div className = 'header'>
                <Link to = '/'><img src = {icon} alt = 'F.get' width={58} height={29}  className='fget'/> </Link>
                <div className='text'>News</div>
                <div className='text'>Favorite</div>
                <div className='text'>TV-chanels</div>
                <div className='text'>Categorys</div>
                <div className='contact-login'>
                    <div className='text'>Contact</div>
                   {param.pathname === '/'? <Link to = '/login' style={{textDecoration:'none'}}><div className='login'>Log in</div></Link>:null}
                </div>
            </div>
            <Outlet />
        </>
    )
}


export default Header