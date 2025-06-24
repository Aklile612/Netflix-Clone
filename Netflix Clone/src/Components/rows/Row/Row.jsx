import { useEffect, useState } from 'react'
import "./Row.css"
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,settrailerUrl] =useState(null);
    const [loading,setLoading]=useState(false);

    const base_url="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        (async()=>{
            try{
                setLoading(true);
                const request=await axios.get(fetchUrl);
                setMovies(request.data.results);
                setLoading(false);
            }catch(error){
                console.log("error",error);
                setLoading(false);
            }
        }) ()
    },[fetchUrl]);
    const handleclick=(movie)=>{
        if(trailerUrl){
            settrailerUrl(null)
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url)=>{
                    console.log(url)
                    const urlParams= new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console.log(urlParams.get('v'))
                    settrailerUrl(urlParams.get('v'));
                    
                }).catch((error)=>console.log("Trailer not found",error))
        }
    }
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {loading ? <p style={{color:"gray"}}>Loading...</p> : movies.length === 0 ? <p style={{color:"gray"}}>No movies available</p> : movies.map((movie)=>(
                <div className="poster-container" key={movie.id}>
                    <img
                        onClick={()=> handleclick(movie)}
                        src={`${base_url}${isLargeRow? movie.poster_path :movie.backdrop_path}`} alt={movie.name} title={movie?.title || movie?.name || movie?.original_name} className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`} loading="lazy" onError={(e) => { e.target.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='225' fill='%23333'><rect width='150' height='225'/><text x='50%' y='50%' fill='%23666' text-anchor='middle' dy='.3em' font-size='14'>No Image</text></svg>" }} 
                    />
                    <div className="poster-title">{movie?.title || movie?.name || movie?.original_name} {movie?.release_date ? `(${movie.release_date.slice(0,4)})` : movie?.first_air_date ? `(${movie.first_air_date.slice(0,4)})` : ""}</div>
                </div>
            ))}
        </div>
        <div style={{padding:'40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
      
    </div>
  )
}

export default Row
