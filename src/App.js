import React from "react";
import './styles/App.css'
import './styles/Navbar.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
          <button className='nav-btn-roll-up'/>
          <button className='nav-btn-full-screen'/>
          <button className='nav-btn-close'/>
      </nav>
    </div>
  );
}

export default App;
