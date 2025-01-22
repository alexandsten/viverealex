import { Link } from 'react-router-dom';
import '../App.css'

function About() {
  

  return (
    <>
      <div>
        
      </div>
      <h1>About me</h1>
      <div className="card">
        <Link to="/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
           About me
        </Link>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default About
