import '../style/info.css'
import v2 from '../Property 1=Variant2.svg'
import v1 from '../movie.svg'
import star from '../Star 3.svg'
function Info({height}){

    return(
        <>
            <div className="video" style={{height:height*46/100 + 'px'}}>Video</div>
            <img src = {v1} alt = {v1} className='mv1' />
            <img src = {v2} alt = {v2} className='mv2'/>
            <div className='titles'>
                <div>
                    Black Demon
                </div>
                <div>
                    About film
                </div>
            </div>
            <div className='about'>
                <div>
                    <div>Date: 2022</div>
                    <div>Country: USA</div>
                    <div>Rate:7.1</div>
                    <div>Category: Drama</div>
                    <div>Time:73 minute</div>
                    <div className='rate'>
                        <div>Your Rate</div>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                        <img src = {star} alt = {star} height={height*3.2/100}/>
                    </div>
                </div>
                <div className='plot' >Жизнь робкого опера Гоши уже не будет прежней после укуса собаки. Пёс оказался заражённым и подарил Гоше невероятную силу – и невероятные проблемы. Супергеройская экшен-комедия о людях и оборотнях: бодрящая смесь боевика, юмора, фантастики и приключенческой истории о похождениях нечисти в небольшом бандитском городке.Жизнь робкого опера Гоши уже не будет прежней после укуса собаки. Пёс оказался заражённым и подарил Гоше невероятную силу – и невероятные проблемы. Супергеройская экшен-комедия о людях и оборотнях: бодрящая смесь боевика, юмора, фантастики и приключенческой истории о похождениях нечисти в небольшом бандитском городке.Жизнь робкого опера Гоши уже не будет прежней после укуса собаки. Пёс оказался заражённым и подарил Гоше невероятную силу – и невероятные проблемы. Супергеройская экшен-комедия о людях и оборотнях: бодрящая смесь боевика, юмора, фантастики и приключенческой истории о похождениях нечисти в небольшом бандитском городке.Жизнь робкого опера Гоши уже не будет прежней после укуса собаки. Пёс оказался заражённым и подарил Гоше невероятную силу – и невероятные проблемы. Супергеройская экшен-комедия о людях и оборотнях: бодрящая смесь боевика, юмора, фантастики и приключенческой истории о похождениях нечисти в небольшом бандитском городке.</div>
            </div>
        </>
    )
}

export default Info