import '../../styles/Dropdown.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { forwardRef } from 'react';

const DropdownButton = forwardRef((props, ref) => {
  
  const { children, open, toggle } = props;
  
  return (
    <div className={`dropdownBtn ${open ? 'buttonOpen' : null}`} 
      onClick={toggle} 
      ref={ref}
    >
      {children}
      <span className='toggleIcon'>
        {open ? <FaChevronUp/> : <FaChevronDown/>}
      </span>
    </div>
  )
})

export default DropdownButton