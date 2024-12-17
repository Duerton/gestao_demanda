"use client"

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ModalDefault from '@/components/ModalDefault';

interface ButtonProps {
  name: string,
  color: string,
  msg: string,
}

interface FooterDefault {
  buttons: Array<ButtonProps>
}

const FooterDefault: React.FC<FooterDefault> = ({buttons}) => {
  
  const [open, setOpen] = useState<boolean>(false); 
  const [currentButtonName, setCurrentButtonName] = useState<string | null>(null);
  
  const handleOpenModal = (name: string) => { 
    setCurrentButtonName(name)
    setOpen(!open)
  };

  const handleCloseModal = () => { 
    setOpen(false); 
    setCurrentButtonName(null);
  };

  return (
    <Box display="flex" justifyContent="left" mt={3} mb={3}>
      <Button 
        variant="contained"
        type='submit'
        sx={{ mx: 1, marginLeft : '0px', backgroundColor: buttons[0].color }}
      >
        {buttons[0].name}
      </Button>
      {buttons.slice(1).map( button => {
        return (
          <Box key={button.name}>
            <Button 
              variant="contained"
              onClick={() => handleOpenModal(button.name)}
              sx={{ mx: 1, marginLeft : '0px', backgroundColor:button.color }}
            >
              {button.name}
            </Button>
            {currentButtonName === button.name && (
              <ModalDefault 
                open={open}
                handleCloseModal={handleCloseModal}
                name={button.name}
                msg={button.msg}
              />
            )}
          </Box>
        )
      })}
      <Button variant="outlined" color="primary" sx={{ mx: 1, marginLeft : '0px' }}>
        Cancelar
      </Button>
    </Box>
  );
};

export default FooterDefault;
