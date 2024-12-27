"use client"

import Grid from '@mui/material/Grid2';
import HeaderName from "@/components/HeaderComponent";
import { useEffect, useState } from "react";
import { getField, saveFieldsConfig } from "@/fetch/fetchCadastro";
import TableComponents from "@/components/TableComponent";
import { GridColDef } from '@mui/x-data-grid';
import FooterDefault from '@/components/FooterDefault';
import { DEFAULT_BUTTONS } from '@/utils/constants';

const Config = () => {

  const [rowsFornecedor, setRowsFornecedor] = useState([])
  const [rowsPrograma, setRowsPrograma] = useState([])
  const [rowsOrgao, setRowsOrgao] = useState([])
  
  useEffect( () => {
    Promise.all([getField('fornecedores'), getField('programas'), getField('orgaos') ])
      .then( ([fornecedores, programas, orgaos]) => {
      setRowsFornecedor(fornecedores)
      setRowsPrograma(programas)
      setRowsOrgao(orgaos)
    })
  },[])

  const extraColumnsFornecedor : GridColDef = {
    field: 'fornecedor',
    headerName: 'Fornecedor',
    type: 'string',
    flex: 1,
    editable: true,
    headerAlign: 'left',
    align: 'left'
  }
  
  const extraColumnsPrograma : GridColDef = {
    field: 'programa',
    headerName: 'Programa',
    type: 'string',
    flex: 1,
    editable: true,
    headerAlign: 'left',
    align: 'left'
  }

  const extraColumnsOrgao : GridColDef = {
    field: 'orgao',
    headerName: 'Orgao',
    type: 'string',
    flex: 1,
    editable: true,
    headerAlign: 'left',
    align: 'left'
  }

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <form action={saveFieldsConfig}>
      <HeaderName name={'Configurações'}/>
      <input type='hidden' value={JSON.stringify(rowsFornecedor)} name="fornecedor"></input>
      <input type='hidden' value={JSON.stringify(rowsPrograma)} name="programa"></input>
      <input type='hidden' value={JSON.stringify(rowsFornecedor)} name="orgao"></input>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TableComponents
            rows={rowsFornecedor}
            setRows={setRowsFornecedor}
            extraColumns={extraColumnsFornecedor}
          />
        </Grid>
        <Grid component="div" size={6}>
          <TableComponents
            rows={rowsPrograma}
            setRows={setRowsPrograma}
            extraColumns={extraColumnsPrograma}
          />
        </Grid>
        <Grid component="div" size={6}>
          <TableComponents
            rows={rowsOrgao}
            setRows={setRowsOrgao}
            extraColumns={extraColumnsOrgao}
          />
        </Grid>
      </Grid>
      <FooterDefault 
        buttons={DEFAULT_BUTTONS}
      />
    </form>
  )
}

export default Config;