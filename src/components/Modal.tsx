"use client"

import { Box, Button, Modal, TextField, Typography } from "@mui/material"

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
  open: boolean, 
  handleClickModal: () => void
}

const ModalDefault: React.FC<ModalDefaultProps> = ({handleClickModal, open}) => {

  return (
    <Modal open={open} onClose={handleClickModal}>
      <Box sx={style}>
        <Box mb={'15px'}>
          <Typography variant="h6"> 
            Replanejar
          </Typography>
        </Box>
        <TextField 
          fullWidth
          multiline
          rows={4}
          label='Justificativa' 
        />
        <Box mt={'15px'}>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mx: 1, marginLeft : '0px' }}
          >
            Encerrar
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mx: 1 }}
            onClick={handleClickModal}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalDefault;