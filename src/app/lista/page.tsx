"use client"

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Chip, Container, IconButton, styled } from '@mui/material';
import OutboxIcon from '@mui/icons-material/Outbox';
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Column {
  id: 'numero' | 'titulo' | 'estado' | 'prioridade' | 'acoes';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'numero',
    label: 'Número',
    minWidth: 100,
    align: 'center'
  },
  { id: 'titulo',
    label: 'Título',
    minWidth: 400,
    align: 'center'
  },
  {
    id: 'estado',
    label: 'Estado',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'prioridade',
    label: 'Prioridade',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'acoes',
    label: 'Ações',
    minWidth: 100,
    align: 'center'
  },
];

interface Data {
  numero: number;
  titulo: string;
  estado: string;
  prioridade: string;
}

function createData(
  numero: number,
  titulo: string,
  estado: string,
  prioridade: string,
): Data {
  return { numero, titulo, estado, prioridade };
}

const rows = [
  createData(2025010001, 'Primeira demandaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Solicitação Replanejamento', 'Vermelho'),
  createData(2025010002, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010003, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010004, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010005, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010006, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010007, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010008, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(2025010009, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(20250100010, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(20250100011, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(20250100012, 'Primeira demanda', 'Avaliação', 'Vermelho'),
  createData(20250100013, 'Primeira demanda', 'Avaliação', 'Vermelho'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#676E74",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id: number) => { 
    console.log(`Delete item with id: ${id}`); 
  };

  const handleEdit = (id: number) => { 
    console.log(`Edit item with id: ${id}`);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" size={'small'} padding='none'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.numero}>
                    <TableCell align="center" component="th" scope="row">{row.numero}</TableCell>
                    <TableCell align="center" sx={{ maxWidth: 500, wordWrap: 'break-word' }}>{row.titulo}</TableCell>
                    <TableCell align="center">
                      <Chip label={row.estado}/>
                    </TableCell>
                    <TableCell align="center">
                      <Container
                        sx= {{ 
                              justifyContent: 'center', 
                              display: 'flex'
                            }}>
                        <Chip 
                          sx= {{ width: 28, 
                                height: 28,
                                backgroundColor: 'blue'
                              }}
                        />
                      </Container>
                    </TableCell>
                    <TableCell align="center" sx={{ minWidth: 120}}>
                      <IconButton onClick={() => handleEdit(row.numero)} aria-label="edit">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row.numero)} aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row.numero)} aria-label="delete">
                        <OutboxIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
