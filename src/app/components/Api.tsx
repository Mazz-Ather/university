import { h2 } from 'framer-motion/client'
import React from 'react'
//https://simple-books-api.glitch.me/books/:bookId
// get
// post => insert
// patch => update
// delete = delete
// ?post men , insomenia ,
//thunder client => extension 
interface bookType {
    id: number,
    name: string,
    type: string,
    available: boolean
}
export default function Api() {
    async function main(){
        const res = await  fetch('https://simple-books-api.glitch.me/books',{
            method:'GET'
        })
     const data:bookType[] = await res.json()
     console.log(data)
    }
//  main()
    return (
        <div>
<h1>books</h1>
<ul> 
    {/* {data.map((book) =>{
        return(
            <h2>{books.name}</h2>
        )
    })} */}
</ul>
        {/* {books.map((book:any) => {
           return <div key={book.id}>
            <h1>{book.id}</h1>
            <h1>{book.title}</h1>
           </div>
        })} */}
            </div>
)}
