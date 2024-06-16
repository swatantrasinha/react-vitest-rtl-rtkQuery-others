import { NavLink } from 'react-router-dom'

const SampleCoponents = () => {
  const sampleEleNavLink= () => (
    <nav>
    <ul className="relative flex justify-evenly border border-s-black bg-black text-yellow-500">
      <li className="nav-item active hover:text-lg">
        <NavLink className="nav-link" to="/sample-components/application">
          1. Application
        </NavLink>
      </li>

      <li className="nav-item active hover:text-lg">
        <NavLink className="nav-link" to="/sample-components/skills">
        2. Skills
        </NavLink>
      </li>

      <li className="nav-item active hover:text-lg">
        <NavLink className="nav-link" to="/sample-components/counter">
         3. Counter
        </NavLink>
      </li>

     
    </ul>
    
  </nav>
  )
  return (
    <div>
      <div>{sampleEleNavLink()}</div>
    </div>
   
  )
}

export default SampleCoponents