import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FooterDefault from "@/components/FooterDefault";
import { BUTTONS_EXECUCAO, DEFAULT_BUTTONS } from "@/utils/constants";
import FileUploadAndList from "@/app/planejamento/components/FileList";
import CompanyList from "@/app/planejamento/components/CompanyList";
import { getCadastro, handleSubmit } from "@/fetch/fetchCadastro";
import HeaderName from "@/components/HeaderComponent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UploadSingleFile from "@/components/UploadSingleFile";
import { Estados } from "@/utils/types";
// import { DateField } from "@mui/x-date-pickers";


async function Execucao ( {
    params
  } : {
    params: Promise<{categoria: string, id:string}>
  }) {

  const {categoria, id} = (await params)
  const isEdit = categoria !== 'edit'
  const data = id === 'new' ? {} : await getCadastro(id);
  const estado = Estados.EXECUCAO

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <form action={handleSubmit}>
      <HeaderName name={'Execução da demanda'}/>
      <input type='hidden' value={id} name="id"></input>
      <input type='hidden' value={estado} name="estado"></input>
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
                <CompanyList/>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth 
            disabled={isEdit} 
            name="orcamentoutilizado"
            defaultValue={data.orcamentoutilizado}
            label='Orçamento utilizado' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth
            disabled={isEdit}
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
      
      <FooterDefault 
        buttons={isEdit ? BUTTONS_EXECUCAO : DEFAULT_BUTTONS}
        data={data}
      />
    </form>
    // </LocalizationProvider>
  )
}
  
export default Execucao;