

import React from 'react'

function List({ hobby }) {
   
    const listItems = hobby.map((item) =>
          <li key={item}>{item}</li>
    )
    return (
      <ul>{ listItems}</ul>
  )
    
    


  
}

export default List

