import React from 'react'

const DropdownItem = ({children, onClick}) => {
  return (
    <div className='dropdownItem' onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItem