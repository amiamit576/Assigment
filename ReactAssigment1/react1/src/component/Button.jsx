import React from 'react'

function Button({text,onClick}) {
  return (
      <div>
          <button onClick={() => console.log({text})}>{text }</button>
    </div>
  )
}

export default Button