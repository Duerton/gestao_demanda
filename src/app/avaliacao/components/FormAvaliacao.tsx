"use client"

import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FooterDefault from "@/components/FooterDefault";
import { BUTTONS_AVALIACAO, BUTTONS_ENCERRAMENTO, BUTTONS_EXECUCAO, BUTTONS_PLANEJAMENTO, BUTTONS_PLANEJAMENTO_AUTORIZACAO, BUTTONS_PLANEJAMENTO_EDIT, BUTTONS_REPLANEJAMENTO, DEFAULT_BUTTONS } from "@/utils/constants";
import { handleSubmitCadastro } from "@/fetch/fetchCadastro";
import HeaderName from "@/components/HeaderComponent";
import { Demanda, Estados } from "@/utils/types";
import UploadSingleFile from "@/components/UploadSingleFile";
import { useState } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import FullFeaturedCrudGrid from "@/app/planejamento/components/FullFeaturedCrudGrid";
import FileUploadAndList from "@/app/planejamento/components/FileList";
// import { DateField } from "@mui/x-date-pickers";

interface FormAvaliacaoProps {
  values: Demanda,
  id: string,
  categoria: string
}

const FormAvaliacao = ( { values, id, categoria } : FormAvaliacaoProps) => {

  const isEdit = categoria === 'action'

  let header = ''
  let buttons = DEFAULT_BUTTONS
  switch (categoria){
    case 'actionreplanejamento':
      header = 'Avaliar replanejamento da demanda'
      buttons = BUTTONS_REPLANEJAMENTO 
      break;
    case 'actionencerramento':
      header = 'Avaliar encerramento da demanda'
      buttons = BUTTONS_ENCERRAMENTO
      break;
    default:
      header = 'Avaliação final'
      buttons = isEdit ? BUTTONS_AVALIACAO : DEFAULT_BUTTONS
      break;
  }

  const initialRows: GridRowsProp = values.empresas ? JSON.parse(values.empresas) : [];

  const [data, setData] = useState(values)
  const [rows, setRows] = useState(initialRows);

  return (

    <form action={handleSubmitCadastro}>
      <HeaderName name={header}/>
      <Grid container spacing={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Dados de cadastro</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField 
                  fullWidth 
                  name="num_demanda" 
                  defaultValue={data.num_demanda}
                  label='Nº da demanda' 
                  disabled
                  />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  label='Data de registro' 
                  name="data_registro" 
                  defaultValue={data.data_registro}
                  disabled
                  />
              </Grid>
              <Grid size={12} component="div">
                <TextField 
                  fullWidth 
                  name="titulo" 
                  label='Título' 
                  defaultValue={data.titulo}
                  disabled
                  />
              </Grid>
              <Grid component="div" size={4}>
                <Box sx={{ minWidth: 120}} >
                  <FormControl fullWidth>
                    <InputLabel id='fornecedor'>Fornecedor</InputLabel>
                    <Select
                      id="fornecedor"
                      label="Fornecedor"
                      name="fornecedor"
                      defaultValue={data.fornecedor || '1'}
                      disabled
                    >
                      <MenuItem value={1}>Verde</MenuItem>
                      <MenuItem value={2}>Amarelo</MenuItem>
                      <MenuItem value={3}>Vermelho</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid component="div" size={4}>
                  <TextField 
                    fullWidth 
                    label='Data' 
                    name="data_data" 
                    defaultValue={data.data_data}
                    disabled
                    />
              </Grid>
              <Grid component="div" size={4}>
                <Box sx={{ minWidth: 120}}>
                  <FormControl fullWidth>
                    <InputLabel id='prioridade'>Prioridade</InputLabel>
                    <Select
                      id="prioridade"
                      label="Prioridade"
                      name="prioridade"
                      defaultValue={data.prioridade || 'verde'}
                      disabled
                      >
                      <MenuItem value={'verde'}>Verde</MenuItem>
                      <MenuItem value={'amarelo'}>Amarelo</MenuItem>
                      <MenuItem value={'vermelho'}>Vermelho</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  label='Distrito'
                  name="distrito"
                  defaultValue={data.distrito}
                  disabled
                  />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  label='Bairro'
                  name="bairro"
                  defaultValue={data.bairro}  
                  disabled
                  />
              </Grid>
              <Grid component="div" size={12}>
                <TextField 
                  fullWidth 
                  label='Logradouro' 
                  name="logradouro"
                  defaultValue={data.logradouro}  
                  disabled
                  />
              </Grid>
              <Grid component="div" size={6}>
                <Box sx={{ minWidth: 120}}>
                  <FormControl fullWidth>
                    <InputLabel id='programa'>Programa</InputLabel>
                    <Select
                      id="programa"
                      label="Programa"
                      name="programa"
                      defaultValue={data.programa || 'verde'} 
                      disabled 
                    >
                      <MenuItem value={1}>Verde</MenuItem>
                      <MenuItem value={2}>Amarelo</MenuItem>
                      <MenuItem value={3}>Vermelho</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid component="div" size={6}>
                <Box sx={{ minWidth: 120}}>
                  <FormControl fullWidth>
                    <InputLabel id='orgaoresponsavel'>Órgão responsável</InputLabel>
                    <Select
                      id="orgaoresponsavel"
                      label="Órgão responsável"
                      name="orgao"
                      defaultValue={data.orgao || 'verde'}  
                      disabled
                      >
                      <MenuItem value={1}>Verde</MenuItem>
                      <MenuItem value={2}>Amarelo</MenuItem>
                      <MenuItem value={3}>Vermelho</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid component="div" size={12}>
                <TextField 
                  fullWidth
                  multiline
                  rows={4}
                  label='Descrição' 
                  name="descricao"
                  defaultValue={data.descricao}  
                  disabled
                  />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Dados de planejamento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  disabled
                  name="orcamentoprevisto"
                  label='Orçamento previsto'
                  defaultValue={data.orcamentoprevisto}  
                />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="prazoexecucao"
                  label='Prazo para execução' 
                  defaultValue={data.prazoexecucao}
                />
              </Grid>
              <Grid component="div" size={12}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="acao"
                  label='Ação' 
                  defaultValue={data.acao}
                />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="qtdetapas"
                  label='Quantidade de etapas' 
                  defaultValue={data.qtdetapas}
                />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="qtdfuncionarios"
                  label='Quantidade de funcionários' 
                  defaultValue={data.qtdfuncionarios}
                />
              </Grid>
              <Grid component="div" size={12}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="responsavel"
                  label='Responsável técnico' 
                  defaultValue={data.responsavel}
                />
              </Grid>
              <Grid container size={12}>
                <Grid 
                  size={10}
                  display="flex"
                  alignItems="center"
                >
                  <TextField 
                    disabled
                    fullWidth
                    label='Nome do arquivo'
                  />
                </Grid>
                <Grid 
                  size={2} 
                  display="flex"
                  alignContent="center"
                  justifyContent="center"
                >
                  <UploadSingleFile/>
                </Grid>
              </Grid>
              <Grid component="div" size={12}>
                <FullFeaturedCrudGrid 
                  rows={rows}
                  setRows={setRows}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Dados de execução</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth 
                  disabled 
                  name="orcamentoutilizado"
                  defaultValue={data.orcamentoutilizado}
                  label='Orçamento utilizado' />
              </Grid>
              <Grid component="div" size={6}>
                <TextField 
                  fullWidth
                  disabled
                  name="etapasconcluidas"
                  defaultValue={data.etapasconcluidas}
                  label='Etapas concluídas' 
                />
              </Grid>
              <Grid container size={12}>
                <Grid 
                  size={10}
                  display="flex"
                  alignItems="center"
                >
                  <TextField 
                    disabled
                    fullWidth
                    label='Relatório'
                  />
                </Grid>
                <Grid 
                  size={2} 
                  display="flex"
                  alignContent="center"
                  justifyContent="center"
                >
                  <UploadSingleFile/>
                </Grid>
              </Grid>
              <Grid component="div" size={12}>
                <FileUploadAndList label={'Imagens'}/>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Grid component="div" size={12}>
          <TextField fullWidth disabled label='Motivo da interrupção' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField 
            fullWidth 
            disabled
            multiline
            rows={4}
            label='Justificativa' />
        </Grid>
      </Grid>
      <FooterDefault 
        buttons={buttons}
        data={data}
      />
    </form>
  )
}

export default FormAvaliacao