'use client'

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import InputFileUpload from './UploadFiles';

const FileUploadAndList: React.FC = () => {

  const files = [{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'},{name: 'primeiro.pdf'}, {name: 'segundo.pdf'}]

  return (
      <Box
        component="section"
        sx={{
          height: 500,
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
          p: 2, 
          border: '1px solid grey',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box>

          <Typography variant="subtitle2" gutterBottom>
            Arquivos
          </Typography>
          <List dense sx={{maxHeight: 400, overflowY: 'auto',}}>
            {files.map((file, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <Box>
                    <IconButton edge="end" aria-label="delete">
                      <DownloadIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
                divider
              >
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        </Box>
        <InputFileUpload/>
      </Box>
  );
};

export default FileUploadAndList;
