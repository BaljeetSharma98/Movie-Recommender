import React, { use, useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'
import '../css/Home.css'
import { SearchMovies,getPopularMovies } from '../services/api'

const Home = () => {

    const [searchQuery,setSearchQuery]=useState("");

    const [movies,setMovies]=useState([]);

    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const popularMovies= await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movie...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])

    // const movies=[
    //     {id:1, title:"ABCD", release_date:"20-18-2008"},
    //     {id:2, title:"tebcwe", release_date:"20-18-2005"},
    //     {id:3, title:"ajbca", release_date:"20-18-2000"}
    // ]

    const handleSearch=async(e)=>{
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults=await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movie...")
        }finally{
            setLoading(false)
        }
                 
    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder='Search for movie...' className='search-input' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div> }

        {loading?(<div className='loading'>Loading...</div>): ( <div className='movies-grid'>
            {movies.map( (movie) => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>)
            )}
        </div>)}
        
    </div>
  )
}

export default Home