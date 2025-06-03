import { useState } from "react"

export default function Navbar () {
  const[showMenu , setShowMenu] = useState(false)
  const handleToggle = ()=>{
    setShowMenu(!showMenu)
  }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
       showMenu ? <i class="bi bi-x-lg"></i> : <i class= "navbar-toggler-icon"></i>
      }
      
    </button>
    <div class={`collapse navbar-collapse ${showMenu ? 'show' :''}`} id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link"  href="#"><i class="bi bi-person-fill"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-cart4"></i></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link Services" aria-disabled="false"><i class="bi bi-search"></i></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
 )
}


