import OverlayExplore from '/public/overlayExplore.png'
import './style.css'

const Explore = (props) => {
    return (
        <div className='explore'>
            <h1 className='title'>Explore</h1>
            <p className='text'>What are you gonna watch today ?</p>
            <div className='groupBanner'>
                <img src={props.movie.image} alt="" className='banner'/>
                <img src={OverlayExplore} alt="" className='overlayExplore'/>
                <div className='info'>
                    <p className='name'>{props.movie.movieName}</p>
                    <p className='desc'>{props.movie.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Explore