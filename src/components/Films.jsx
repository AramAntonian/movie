import right from '../right.svg'
import movie from '../movie.svg'
import v2 from '../Property 1=Variant2.svg'
import '../style/film.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Films(){
    const [hover,setHover] = useState([{id:1,hover:false},{id:2,hover:false},{id:3,hover:false},{id:4,hover:false},{id:5,hover:false},{id:6,hover:false}]) 
    const [hover2,setHover2] = useState([{id:1,hover:false},{id:2,hover:false},{id:3,hover:false},{id:4,hover:false},{id:5,hover:false},{id:6,hover:false}]) 

    function onMouseEnter(id,setHover){
        setHover(prev=>{
            return prev.map(el => el.id === id?{id,hover:true}:el)
        })
    }
    function onMouseLeave(id,setHover){
        setHover(prev =>{
            return prev.map(el => el.id === id?{id,hover:false}:el)
        })
    }


    
    return(
        <>
            <div className='cont'>
                <div className = 'type'>
                    <div>Premium Films</div>
                    <img src = {right} alt = 'right' style = {{marginTop:"3px"}}/>
                </div>
                <div className='film'>
                    {
                        hover.map(el =>{
                            return(
                                <div className='films'>
                                <div className='movie'>
                                    {
                                        !el.hover?
                                        <Link  to = '/BlackDemon'>
                                            <img src = {movie} alt = 'movie' 
                                             style={el.hover?{opacity:0}:{opacity:1}}
                                             onMouseEnter={()=>onMouseEnter(el.id,setHover)}
                                             />

                                        </Link>:
                                        <Link to  = '/BlackDemon'>

                                            <img src = {v2} alt = 'v2'
                                            className='v1'
                                            onMouseLeave= {()=>onMouseLeave(el.id,setHover)}
                                            style={el.hover?{opacity:1}:{opacity:0}}
                                            />
                                        </Link>
                                    }
                                    <div className='movie-name'><strong>Black Demon</strong></div>
                                    <div className='subscribe'>Subscribe</div>
                                </div>
                            </div>
                            )
                        })
                    }
             
               
                </div>
            </div>
            <div className='cont' style = {{marginBottom:'10px'}}>
                <div className = 'type'>
                    <div>Top</div>
                    <img src = {right} alt = 'right' style = {{marginTop:"3px"}}/>
                </div>
                <div className='film'>
                {
                        hover2.map(el =>{
                            return(
                                <div className='films'>
                                <div className='movie'>
                                {
                                        !el.hover?
                                        <Link  to = '/BlackDemon'>
                                            <img src = {movie} alt = 'movie' 
                                             style={el.hover?{opacity:0}:{opacity:1}}
                                             onMouseEnter={()=>onMouseEnter(el.id,setHover2)}
                                             />

                                        </Link>:
                                        <Link to  = '/BlackDemon'>

                                            <img src = {v2} alt = 'v2'
                                            className='v1'
                                            onMouseLeave= {()=>onMouseLeave(el.id,setHover2)}
                                            style={el.hover?{opacity:1}:{opacity:0}}
                                            />
                                        </Link>
                                    }
                                    <div className='movie-name'><strong>Black Demon</strong></div>
                                    <div className='subscribe'>Subscribe</div>
                                </div>
                            </div>
                            )
                        })
                    }
             
                </div>
            </div>
        </>
    )
}

export default Films