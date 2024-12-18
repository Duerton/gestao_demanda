import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderName from "@/components/HeaderComponent";

const card = (
  <React.Fragment>
    <CardContent>
      <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
        <Typography sx={{ color: '#8C1D18', fontWeight: 'bold', alignItems: 'center' }} variant="h1">
          30
        </Typography>
      </Grid>
      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
        demandas abertas
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Inicio = () => {

  return (
    <Box sx={{ minWidth: 275 }}>
      <HeaderName name='Inicio'/>
      <Grid container size={12}>
        <Grid display="flex" size="grow" justifyContent="center" alignItems="center" spacing={2}>
          <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
            <Card variant="outlined" sx={{ maxWidth: 250, maxHeight:200 }}>{card}</Card>
          </Grid>
          <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
            <Card variant="outlined" sx={{ maxWidth: 250, maxHeight:200 }}>{card}</Card>
          </Grid>
          <Grid display="flex" size="grow" justifyContent="center" alignItems="center">
            <Card variant="outlined" sx={{ maxWidth: 250, maxHeight:200 }}>{card}</Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Inicio;