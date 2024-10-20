import { Link } from 'react-router-dom';
import '../App.css'

function Home() {

  return (
    <>
      <div>
       
      </div>
      <h1>Home</h1>
      <div className="card">
        <Link to="/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to="/meditation" style={{ textDecoration: 'none' }}>
           Meditation
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

export default Home
