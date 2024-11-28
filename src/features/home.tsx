import { Link } from 'react-router-dom';
import AlexVivereLogo from '../assets/VivereLogo2.png';
import '../App.css'
import { Stack, Typography } from '@mui/material';

function Home() {

  return (
    <>
      <div>
       
      </div>
      <Stack flexDirection={'row'} width={'100%'} gap={3}>
        <img style={{ height: '4em', width: '4em' }} src={AlexVivereLogo}/>
        <h1>Home</h1>
      </Stack>
      <div className="card">
        
        <Link to="/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to="/meditation" style={{ textDecoration: 'none' }}>
           Meditation
        </Link>
        <Typography sx={{ fontSize: '3em'}}>Hello world</Typography>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
