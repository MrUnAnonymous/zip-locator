import React from 'react'

const ClearButton = ( { clear , setClear } ) => {
  const handleClick = () => {
    setClear(true)
  }

  return (
    <div>
      <button className='btn-clear' onClick={() => handleClick()}>Clear</button>
    </div>
  )
}

export default ClearButton