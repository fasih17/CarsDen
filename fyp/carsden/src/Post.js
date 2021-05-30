import React, {useState,useEffect} from 'react'
import Card from './Card';

const Post=()=>{
    useEffect(() => {
        console.log("It's post bro")
        
    }, [])
    return(
        <>
        <h1>Post</h1>
        </>
    )
}
export default Post;