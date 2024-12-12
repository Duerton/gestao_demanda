'use client'

import React, { useState } from 'react';
import { Button, Box, Container, Typography, List, ListItem, ListItemText, IconButton, ListItemButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import InputFileUpload from './UploadFiles';

const FileUploadAndList: React.FC = () => {

  const files = [{name: 'primeiro.pdf'}, {name: 'segundo.pdf'}]

  return (
    <Container>
      <Box mt={2} border={'1px'}>
        <Typography variant="h6" gutterBottom>
          Arquivos
        </Typography>
        <Divider/>
        <List dense>
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
        <InputFileUpload/>
      </Box>
    </Container>
  );
};

export default FileUploadAndList;
