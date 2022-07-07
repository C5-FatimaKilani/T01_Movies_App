import axios from "axios";
import React, { useState } from "react";

const Search = () => {
const [movies, setMovies] = useState([])

    const mySearch = () => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false")
        .then((result)=>{
setMovies(result)
        })
        .catch((error)=>{

        })
    }
}