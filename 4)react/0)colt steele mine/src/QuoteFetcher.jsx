import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function QuoteFetcher() {
    const [quote,setQuote]=useState({text:"",author:""})
    useEffect(()=>{getRandomQuote()},[])
    const getRandomQuote=async ()=>{
        const response= await fetch(RANDOM_QUOTE_URL)
        const jsonResponse=await response.json();
        setQuote({text:jsonResponse.quote.text,author:jsonResponse.quote.author})
        console.log(jsonResponse.quote)
    }
  return (
    <div>
        <button onClick={getRandomQuote}>Get random quote</button>
        <h1>{quote.text}</h1>
        <h3>-{quote.author}</h3>
    </div>
  )
}
