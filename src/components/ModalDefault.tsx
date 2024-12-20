"use client"

import { handleEstado } from "@/fetch/fetchCadastro";
import { Demanda } from "@/utils/types";
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalDefaultProps { 
  name: string,
  open: boolean, 
  msg: string,
  estado: string,
  handleCloseModal: () => void,
  data: Demanda
}

const ModalDefault: React.FC<ModalDefaultProps> = ({handleCloseModal, open, name, msg, data, estado}) => {

  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setInputValue(event.target.value);
  }

  const handleChangeStatus = () => {    
    handleEstado(estado, data, inputValue);
  }

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={style}>
        <Box mb={'15px'}>
          <Typography variant="h6"> 
            {name}
          </Typography>
        </Box>
        <Box mb={'15px'} bgcolor={'#FFEED8'} color={'#938F99'}>
          <Typography variant="subtitle2"> 
            {msg}
          </Typography>
        </Box>
        <TextField 
          fullWidth
          multiline
          rows={4}
          label='Justificativa' 
          onChange={handleInputChange}
        />
        <Box mt={'15px'}>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mx: 1, marginLeft : '0px' }}
            onClick={handleChangeStatus}
          >
            {name}
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mx: 1 }}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalDefault;