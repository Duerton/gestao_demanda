"use client"

import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings'
import MenuButton from './MenuButton';


const Header = () => {
  return (
      <Box sx={{flexGrow : 1}}>
        <Grid sx={{backgroundColor: '#6EADE1'}} minWidth={730} container spacing={2}>
          <Grid size={1} minHeight={70} minWidth={70} sx={{backgroundColor: '6EADE1'}}>
            <Image src={'/feito.png'} width={70} height={70} alt='Logo'></Image>
          </Grid>
          <Grid container spacing={0} size={8} sx={{backgroundColor: '6EADE1'}} display="flex" justifyContent="left" alignItems="center">
            <Grid container spacing={0}>
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
            <Grid  display="flex" size="grow" justifyContent="flex-end" alignItems="center">
              <Typography variant="subtitle2" sx={{color: 'white'}}>
                <div>Olá, Anonimo</div>
              </Typography>
            </Grid>
            <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
            </Grid>
            <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
              <IconButton sx={{backgroundColor : 'white'}}>
                <SettingsIcon sx={{color: '#9E6EE1'}}/>
              </IconButton>
            </Grid>
        </Grid>
        <MenuButton>
        
        </MenuButton>
      </Box>
      
  );
};

export default Header;
