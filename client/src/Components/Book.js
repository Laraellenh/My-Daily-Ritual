
   
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
function Book({books, setBooks}) {

  const params = useParams();
  useEffect(()=>{
    fetch(`/books/${params.id}`)
    .then(res => res.json())
    .then(books => {
      console.log(books)
      setBooks(books)
    })
  },[])
  
 

    const {title, author} = book
    return (
      <div className="card" >
      <h1>{title}</h1>
       <h3>{author}</h3>
       {/* <h3>{budget}</h3> */}
       <img style={{width:'100px'}} src={image}/>
       {/* <p>{description}</p> */}
       <button >Select your Favorite!</button>
      </div>
    );
  }
  
  export default Book;