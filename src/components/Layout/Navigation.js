import React from 'react'
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <ul>
        
          <Link to='/weather'><li>Прогноз погоды</li></Link>
        

     
          <Link to='/todolist'><li>TodoList</li></Link>
     
      
          <Link to='/pokemons'><li>pokemon API</li></Link>
       
          <Link to='/chat'><li>ChatICK</li></Link>
      </ul>
    </nav>
  );
}

export default Navigation;
