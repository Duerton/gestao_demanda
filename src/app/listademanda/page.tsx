"use client"

import { Box, Button, Chip, Container, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import OutboxIcon from '@mui/icons-material/Outbox';
import EditIcon from '@mui/icons-material/Edit'
import GavelIcon from '@mui/icons-material/Gavel';
import HeaderComponent from '@/components/HeaderComponent';
import { useRouter } from 'next/navigation'
import { statusRoute } from '@/utils/constants';
import { getListaDemanda } from '@/fetch/fetchCadastro';

interface Data {
  id: number,
  numero: number;
  titulo: string;
  estado: string;
  prioridade: string;
}

export default function ListaDemanda() {
  const [data, setData] = useState<Data[] | undefined>(undefined);

  useEffect(() => {
    console.log('merda');
    const fetchData = () => {
      getListaDemanda().then( response => {
        setData(response)
      })
    }
    fetchData();
  },[])

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const router = useRouter()

  const handlePrint= (id: number, estado: string) => { 
    console.log(`Print item with id: ${id}, ${estado}`);
  };

  const handleEdit = (id: number, estado: string) => { 
    const status = statusRoute(estado)
    router.push(`/${status}/edit/${id}`);
  };

  const handleAction = (id: number, estado: string) => { 
    const status = statusRoute(estado)    
    let categoria = 'action'
    if (estado === 'Autorização') categoria = 'actionautorizacao'
    if (estado === 'Replanejamento') categoria = 'actionreplanejamento'
    if (estado === 'Encerramento') categoria = 'actionencerramento'
    router.push(`/${status}/${categoria}/${id}`);
  };

  const newDemand = () => {
    router.push('/cadastro/edit/new');
  }

  const getStatusColor = (status: 'verde' | 'amarelo' | 'vermelho') => {
    switch (status) { 
      case 'verde': 
        return 'green'; 
      case 'amarelo': 
        return 'yellow'; 
      case 'vermelho': 
        return 'red'; 
      default: 
        return 'grey'; }
  }

  const columns: GridColDef[] = [
    { field: 'num_demanda',
      headerName: 'Número',
      minWidth: 120,
      headerAlign: 'center',
      align: 'center', 
      headerClassName: 'theme-header',
    },
    { field: 'titulo',
      headerName: 'Título',
      flex: 1,
      headerAlign: 'center',
      align: 'center', 
      headerClassName: 'theme-header',
    },
    {
      field: 'estado',
      headerName: 'Estado',
      flex: 1,
      maxWidth: 210,
      headerAlign: 'center',
      align: 'center', 
      headerClassName: 'theme-header',
      renderCell: (params) => (
        <Chip label={params.row.estado}/>
      )
    },
    {
      field: 'prioridade',
      headerName: 'Prioridade',
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      display: 'flex',
      headerClassName: 'theme-header',
      renderCell: (params) => (
        <Container
          sx= {{ 
                justifyContent: 'center', 
                display: 'flex',
                alignItems: 'center'
              }}>
          <Chip 
            sx= {{ width: 25, 
                  height: 25,
                  backgroundColor: getStatusColor(params.row.prioridade)
                }}
          />
        </Container>
      )
    },
    {
      field: 'acoes',
      headerName: 'Ações',
      minWidth: 140,
      headerAlign: 'center',
      align: 'center', 
      headerClassName: 'theme-header',
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleAction(params.row.num_demanda, params.row.estado)} aria-label="edit">
            <GavelIcon />
          </IconButton>
          {params.row.estado === 'Autorização' ? <IconButton/> :
          <IconButton onClick={() => handleEdit(params.row.num_demanda, params.row.estado)} aria-label="delete">
            <EditIcon />
          </IconButton>}
          <IconButton onClick={() => handlePrint(params.row.num_demanda, params.row.estado)} aria-label="delete">
            <OutboxIcon />
          </IconButton>
        </>
      )
    },
  ];

  return(
    <div style={{ height: 400, width: '100%' }}>
      <HeaderComponent name={'Lista de demandas'}/>
      <Box sx={{ width: '100%' }}>
        <DataGrid 
          rows={data} 
          columns={columns} 
          density='compact'
          filterModel={filterModel}
          onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)} 
        />
        <Button variant='contained' onClick={newDemand}>
          Cadastrar nova demanda
        </Button>
      </Box>
    </div>
  )

}