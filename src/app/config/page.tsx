"use client"

import React, { useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FooterDefault from '@/components/FooterDefault';
import { DEFAULT_BUTTONS } from '@/utils/constants';

const UserSettings: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSave = () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    setError('');
    // Lógica para salvar as configurações do usuário
    console.log('Configurações salvas:', { name, email, password });
  };

  const handleCancel = () => {
    // Lógica para cancelar as alterações
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Configurações de Usuário
      </Typography>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Nova senha"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField 
            label="Confirmar nova senha"
            type="password"
            variant="outlined"
            fullWidth value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <FooterDefault buttons={DEFAULT_BUTTONS}/>
      </Grid>
    </Container>
  );
};

export default UserSettings;

