import icon from '../SearchIcon.svg'
import '../style/category.css'
import Films from './Films'
import menu from '../menu.svg'
import { useState } from 'react'
import close from '../close.svg'

function Category({width}){
    const [open,setOpen] = useState(false)


    return(
        <>
        <div className="category" style = {{width:width*82.8/100 + 'px'}}>
            <div className="catText">All time</div>
            <div className="catText">2023</div>
            <div className="catText">2022</div>
            <div className="catText">2021</div>
            <div className="catText">2020</div>
            <div className="line"></div>
            {
                width>1000?
                <>   
                    <div className="catText">Comedy</div>
                    <div className="catText">Drama</div>
                    <div className="catText">Fantastic</div>
                    <div className="catText">War</div>
                    <div className="catText">Scary</div>
                </>
                :
                <>
                <img src = {menu} alt = 'menu' width={30} height={30} className='category-menu' onClick = {()=> setOpen(prev => !prev)}/>
                <div className='openedMenu' style={!open?{display:'none'}:{}}>
                    <div className="menuText">Comedy</div>
                    <div className="menuText">Drama</div>
                    <div className="menuText">Fantastic</div>
                    <div className="menuText">War</div>
                    <div className="menuText">Scary</div>
                </div>
                </>
            }
          
            <img  src = {icon} alt = 'search' className='search' />
        </div>
        <Films width={width}/>
        </>
    )
}


export default Category