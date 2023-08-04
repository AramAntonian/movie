import right from '../right.svg'
import movie from '../movie.svg'
import v2 from '../Property 1=Variant2.svg'
import '../style/film.css'
import { Link } from 'react-router-dom'

function Films(){

 


    
    return(
        <>
            <div className='cont'>
                <div className = 'type'>
                    <div>Premium Films</div>
                    <img src = {right} alt = 'right' style = {{marginTop:"3px"}}/>
                </div>
                <div className='film'>
                    {
                        [1,2,3,4,5,6].map(el =>{
                            return(
                                <div className='films'>
                                <div className='movie'>
                                    <Link  to = '/BlackDemon' style = {{backgroundImage:`url(${v2})`,opacity:1}} className='movie=link'>
                                            <img src = {movie} alt = 'movie' className='m1'/>
                                            <img src = {v2} alt = 'v2' className='m2'/>
                                    </Link>
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
                        [1,2,3,4,5,6].map(el =>{
                            return(
                                <div className='films'>
                                <div className='movie'>
                                     <Link  to = '/BlackDemon' style = {{backgroundImage:`url(${v2})`,opacity:1}} className='movie=link'>
                                            <img src = {movie} alt = 'movie' className='m1'/>
                                            <img src = {v2} alt = 'v2' className='m2'/>
                                    </Link>
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