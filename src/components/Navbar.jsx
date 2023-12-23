import React from 'react'

function Navbar() {
  return (
  <>
  <div className="bg-stone-800 text-white p-5">
    <div className='container mx-auto flex items-center'>
    <i class="fa-solid fa-briefcase"></i><strong class="p-3">My Work</strong>
    <div class="ml-auto">
        <ul>
            <li className='hover:text-blue-500 cursor-pointer'><a href="https://github.com/aryyan0701?tab=repositories"><i class="fa-brands fa-github"></i><strong> Source Code Available</strong></a> </li>
        </ul>
    </div>

    </div>

  </div>
  </>
        
    
  )
}

export default Navbar