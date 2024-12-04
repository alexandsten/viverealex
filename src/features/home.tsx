import { Link } from 'react-router-dom';
import AlexVivereLogo from '../assets/VivereLogo2.png';
import '../App.css'
import { Stack, Typography } from '@mui/material';

function Home() {

  return (
    <>
      <Stack flexDirection={'row'} width={'100%'} gap={3}>
        <img style={{ height: '4em', width: '4em' }} src={AlexVivereLogo}/>
        <h1>Home</h1>
      </Stack>
        
      <Stack flexDirection={'row'} width={'100%'} gap={3}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to="/meditation" style={{ textDecoration: 'none' }}>
           Meditation
        </Link>
      </Stack>
      <Typography sx={{ fontSize: '3em', fontFamily: 'Major Mono Display'}}>Hello world</Typography>
    </>
  )
}

export default Home
