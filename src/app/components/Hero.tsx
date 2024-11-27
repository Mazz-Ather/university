import React from 'react'
//https://simple-books-api.glitch.me/books/:bookId
interface IBook{
    id:number,
    title:string
}

const Book:IBook[]= [{
id:1,
title:'the great book',
},
{
id:2,
title:'the zombie book',
},{
id:3,
title:'A zombie book',
    }
]

const Hero = () => {
  return (
    <div className='h-[100vh]'>
{Book.map((book) => {
   return <div key={book.id}>
    <h1>{book.id}</h1>
    <h1>{book.title}</h1>
   </div>
})}
    </div>
  )
}

export default Hero 