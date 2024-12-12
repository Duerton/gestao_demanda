import React from 'react';
import { Box, Button } from '@mui/material';

const FooterCadastro: React.FC = () => {
  return (
    <Box display="flex" justifyContent="left" mt={2}>
      <Button variant="contained" color="primary" sx={{ mx: 1, marginLeft : '0px' }}>
        Salvar
      </Button>
      <Button variant="contained" color="error" sx={{ mx: 1 }}>
        Encerrar
      </Button>
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
