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
        <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Major Mono Display', color: 'black' }}>
            Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', fontFamily: 'Major Mono Display', color: 'black' }}>
           About me
        </Link>
      </Stack>
      <Typography sx={{ fontSize: '3em', fontFamily: 'Major Mono Display'}}>Alex Vivere - Movie analysis</Typography>
      <Typography sx={{ fontSize: '1.3em', fontFamily: 'Major Mono Display'}}>My mission is to find themes and symbolism in art.</Typography>
      <Stack flexDirection={'row'} width={'100%'} gap={3}>
        <Typography sx={{ fontSize: '1.3em', fontFamily: 'Major Mono Display'}}>
          Youtube channel
        </Typography>
        <Typography sx={{ fontSize: '1.3em', fontFamily: 'Major Mono Display'}}>
          Instagram
        </Typography>
      </Stack>
    </>
  )
}

export default Home
