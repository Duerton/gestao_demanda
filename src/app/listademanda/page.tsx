"use client"

import { Box, Button, Chip, Container, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import React, { useState } from 'react';
import OutboxIcon from '@mui/icons-material/Outbox';
import EditIcon from '@mui/icons-material/Edit'
import GavelIcon from '@mui/icons-material/Gavel';
import HeaderComponent from '@/components/HeaderComponent';
import { useRouter } from 'next/navigation'

interface Data {
  id: number,
  numero: number;
  titulo: string;
  estado: string;
}

function createData(
  id: number,
  numero: number,
  titulo: string,
  estado: string,
): Data {
  return { id, numero, titulo, estado };
}

const rows = [
  createData(2025010002, 2025010002, 'Primeira demanda', 'Análise'),
  createData(2025010003, 2025010003, 'Primeira demanda', 'Planejamento'),
  createData(2025010004, 2025010004, 'Primeira demanda', 'Execução'),
  createData(2025010005, 2025010005, 'Primeira demanda', 'Avaliação'),
  createData(2025010006, 2025010006, 'Primeira demanda', 'Avaliação'),
  createData(2025010007, 2025010009, 'Primeira demanda', 'Avaliação'),
  createData(2025010008, 2025010008, 'Primeira demanda', 'Avaliação'),
  createData(2025010009, 2025010009,  'Primeira demanda', 'Avaliação'),
  createData(20250100010, 20250100010, 'Primeira demanda', 'Avaliação'),
  createData(20250100011, 20250100011, 'Primeira demanda', 'Avaliação'),
  createData(20250100012, 20250100012, 'Primeira demanda', 'Avaliação'),
  createData(20250100013, 20250100013, 'Primeira demanda', 'Avaliação'),
];

export default function ListaDemanda() {

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const router = useRouter()

  const handleDelete = (id: number) => { 
    console.log(`Delete item with id: ${id}`);
  };

  const handleEdit = (id: number) => { 
    router.push(`/cadastro/edit/${id}`);
  };

  const handleAction = (id: number) => { 
    router.push(`/cadastro/action/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'numero',
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
      renderCell: () => (
        <Container
          sx= {{ 
                justifyContent: 'center', 
                display: 'flex',
                alignItems: 'center'
              }}>
          <Chip 
            sx= {{ width: 25, 
                  height: 25,
                  backgroundColor: 'blue'
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
          <IconButton onClick={() => handleAction(params.row.numero)} aria-label="edit">
            <GavelIcon />
          </IconButton>
          <IconButton onClick={() => handleEdit(params.row.numero)} aria-label="delete">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.numero)} aria-label="delete">
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
          rows={rows} 
          columns={columns} 
          density='compact'
          filterModel={filterModel}
          onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)} 
        />
        <Button variant='contained'>
          Cadastrar nova demanda
        </Button>
      </Box>
    </div>
  )

}