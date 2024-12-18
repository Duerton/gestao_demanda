"use client"

import { Typography } from "@mui/material";
import MenuButton from "./MenuButton";
import Grid from '@mui/material/Grid2';

interface HeaderNameProps { name: string }

const HeaderName: React.FC<HeaderNameProps> = ({name}) => {

  return (
    <Grid container columns={24} spacing={0} 
      sx={{backgroundColor: 'whitesmoke'}}
      mb={'5px'}
      justifyContent="flex-start"
    >
      <Grid size={1} 
        display={"flex"}
        alignItems={'center'}
        justifyItems={'center'}
        minWidth={'70px'}
      >
        <MenuButton></MenuButton>
      </Grid>
      <Grid
        display={"flex"}
        alignItems={'center'}
        justifyItems={'left'}
      >
        <Typography variant="h6">
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderName;
