"use client"
import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import IphoneImage from '../../public/images/iphone-14-pro-finish-select-202209-6-7inch-spaceblack.jpg'
import Link from 'next/link';
import Head from 'next/head';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: "white", minWidth: '100vw', minHeight: '100vh', padding: 2 }}>
        <AppBar position='fixed' sx={{ backgroundColor: 'white', padding: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", paddingX: 5 }}>
            <Typography className='text-black font-bold font-serif' variant='h5' component="h1">Gadgets-Guruji</Typography>
            <Stack sx={{ display: "flex", flexDirection: 'row' }}>
              <Typography className='text-black'>iPhone</Typography>
              <Typography className='text-black ml-2'>Mac</Typography>
              <Typography className='text-black ml-2'>iPad</Typography>
              <Typography className='text-black ml-2'>Watch</Typography>
              <Typography className='text-black ml-2'>Airpods</Typography>
            </Stack>
          </Box>
        </AppBar>
        <Box sx={{ marginTop: 10 }}>
          <Typography className='text-black text-3xl font-semibold'>iPhone</Typography>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={3}>
              <Link href='/apple/iphone-14-pro-specifications'>
                <Item>
                  <Image src={IphoneImage} alt='Iphone 14 Pro' />
                </Item>
                <Typography className='text-black text-center'> iPhone 14 Pro Specifications & Review</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
