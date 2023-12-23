import React from 'react'

function Footer() {
  return (
    
         <footer class="bg-stone-800 text-white p-6 mt-10">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-semibold mb-2">Contact Me</h3>
          <p>Email: aryankadam071@gmail.com</p>
          <p>Phone: +91 9328552388</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">Follow Me</h3>
          <div class="flex space-x-4">
            <a href="https://github.com/aryyan0701" class="text-white hover:text-gray-300" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/aaryyan_" class="text-white hover:text-gray-300" target="_blank">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/aryan-kadam-568083204/" class="text-white hover:text-gray-300" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/_aaaryaan__/" class="text-white hover:text-gray-300" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer