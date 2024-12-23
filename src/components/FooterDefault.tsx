"use client"

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ModalDefault from '@/components/ModalDefault';
import { useRouter } from 'next/navigation'
import { Demanda } from '@/utils/types';

interface ButtonProps {
  name: string,
  color: string,
  msg: string,
  estado: string
}

interface FooterDefault {
  buttons: Array<ButtonProps>,
  data: Demanda
}

const FooterDefault: React.FC<FooterDefault> = ({buttons, data}) => {
  
  const [open, setOpen] = useState<boolean>(false); 
  const [currentButtonName, setCurrentButtonName] = useState<string | null>(null);
  const router = useRouter()

  const handleOpenModal = (name: string) => { 
    setCurrentButtonName(name)
    setOpen(!open)
  };

  const handleCloseModal = () => { 
    setOpen(false); 
    setCurrentButtonName(null);
  };

  const handleCancel = () => { 
    router.push(`/listademanda`);
  };

  const isModal = buttons[0].estado !== '' ? false : true
  const listButtons = isModal ? buttons.slice(1) : buttons

  return (
    <Box display="flex" justifyContent="left" mt={3} mb={3}>
      {isModal &&
      <Button 
        variant="contained"
        type='submit'
        sx={{ mx: 1, marginLeft : '0px', backgroundColor: buttons[0].color }}
      >
        {buttons[0].name}
      </Button>}
      {listButtons.map( button => {
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
                estado={button.estado}
                data={data}
              />
            )}
          </Box>
        )
      })}
      <Button 
        variant="outlined" 
        color="primary" 
        sx={{ mx: 1, marginLeft : '0px' }}
        onClick={handleCancel}
      >
        Cancelar
      </Button>
    </Box>
  );
};

export default FooterDefault;
