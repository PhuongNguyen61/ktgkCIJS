import OverlayNewRelease from '/public/overlayNewRelease.png'
import './style.css'

const NewRelease = (props) => {
    const handleCLick = () => {
        props.movieDisplay({
            image: props.movie.image,
            movieName: props.movie.movieName,
            description: props.movie.description
        })
    }

    return (
        <div className='newRelease' onClick={handleCLick}>
            <img src={props.movie.image} alt="" className='image'/>
            <img src={OverlayNewRelease} alt="" className='overlayNewRelease'/>
            <p className='episode'>Episode {props.movie.episode}</p>
            <p className='name'>{props.movie.movieName}</p>
        </div>
    )
}

export default NewRelease