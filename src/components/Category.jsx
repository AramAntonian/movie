import icon from '../SearchIcon.svg'
import '../style/category.css'
import Films from './Films'

function Category(){

    return(
        <>
        <div className="category">
            <div className="catText">All time</div>
            <div className="catText">2023</div>
            <div className="catText">2022</div>
            <div className="catText">2021</div>
            <div className="catText">2020</div>
            <div className="line"></div>
            <div className="catText">Comedy</div>
            <div className="catText">Drama</div>
            <div className="catText">Fantastic</div>
            <div className="catText">War</div>
            <div className="catText">Scary</div>
            <img  src = {icon} alt = 'search' className='search'/>
        </div>
        <Films />
        </>
    )
}


export default Category