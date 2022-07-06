import axios from "axios"
import { React, useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MoviePage = () => {
const [details, setDetails] = useState([])
const {id} = useParams();

    const getDetail = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`).then((result)=>{
setDetails(result.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        getDetail();
    }, [])
    
    return(
        <div>
           { details&&
        <div style={{backGroundImage:`url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`}}>
           
 <Card style={{ width: '18rem' }}>

 <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
 <Card.Body>
   <Card.Title>{details.original_title}</Card.Title>
   <Card.Text>
    {details.overview}
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroup.Item>IMDB RATING
 : {details.vote_average}</ListGroup.Item>
   <ListGroup.Item>Running time : </ListGroup.Item>
   <ListGroup.Item>Director : </ListGroup.Item>
 </ListGroup>
 <Card.Body>
   <Card.Link href="#">Card Link</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
 </Card>
           
   

        </div>
}
        </div>
    )
}

export default MoviePage