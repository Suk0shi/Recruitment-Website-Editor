import { forwardRef } from 'react'
import '../../styles/Dropdown.css'

const DropdownContent = forwardRef((props, ref) => {

  const {children, open, top } = props;

  return (
    <div 
      ref={ref} 
      className={`dropdownContent ${open ? "contentOpen" : null}`}
      style={{top: top ? `${top}px` : "100%"}}
    >
      {children}
    </div>
  )
})

export default DropdownContent