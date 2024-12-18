"use client"

import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
      <Box sx={{flexGrow : 1}} mb={'5px'}>
        <Grid 
          sx={{backgroundColor: '#6EADE1'}} 
          minWidth={730} 
          container 
          display='flex'
          justifyItems='space-between'
        >
          <Grid container size='grow' minWidth='500'>
            <Grid size={1} minHeight={70} minWidth={70} sx={{backgroundColor: '6EADE1'}}>
              <Image src={'/feito.png'} width={70} height={70} alt='Logo'></Image>
            </Grid>
            <Grid size={8} display="flex" justifyContent="left" alignItems="center">
              <Grid container spacing={0} minWidth={440}>
                <Grid size={12}>
                <Typography variant="h6" sx={{color: 'white'}}>
                  Sistema de Gestão de Cabo Frio
                </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography variant="subtitle2" sx={{color: 'white'}}>
                    <div>Prefeitura de Cabo Frio</div>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container size='grow' display='flex' justifyContent='flex-end' minWidth='280'>
            <Grid display="flex" size={2} justifyContent="flex-end" alignItems="center" minWidth={140}>
              <Typography variant="subtitle2" sx={{color: 'white'}}>
                <div>Olá, Anonimo</div>
              </Typography>
            </Grid>
            <Grid display="flex" size={1} justifyContent="center" alignItems="center" minWidth={70}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
            </Grid>
            <Grid display="flex" size={1} justifyContent="flex-start" alignItems="center" minWidth={70}>
              <IconButton sx={{backgroundColor : 'white'}}>
                <SettingsIcon sx={{color: '#9E6EE1'}}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
  );
};

export default Header;
