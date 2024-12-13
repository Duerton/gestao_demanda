"use client"

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ModalDefault from '@/components/Modal';

const FooterCadastro: React.FC = () => {
  
  const [open, setOpen] = useState<boolean>(false); 
  
  const handleClickModal = () => { setOpen(!open)};

  return (
    <Box display="flex" justifyContent="left" mt={12} mb={12}>
      <Button 
        variant="contained" 
        color="primary"
        sx={{ mx: 1, marginLeft : '0px' }}>
        Salvar
      </Button>
      <Button variant="contained" onClick={handleClickModal} color="error" sx={{ mx: 1 }}>
        Encerrar
      </Button>
      <ModalDefault 
        open={open}
        handleClickModal={handleClickModal}
      />
      <Button variant="contained" color="warning" sx={{ mx: 1 }}>
        Repriorizar
      </Button>
      <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
        Cancelar
      </Button>
    </Box>
  );
};

export default FooterCadastro;
