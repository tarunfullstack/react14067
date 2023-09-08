import React from 'react'

function YourForm(props,a) {
  return (
    <div className='box'>
      <h1>YourForm</h1>
      <input type="text" ref={a}/>
    </div>
  )
}

export default React.forwardRef(YourForm)