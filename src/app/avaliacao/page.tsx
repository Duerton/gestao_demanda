
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FileUploadAndList from "../planejamento/components/FileList";
import CompanyList from "../planejamento/components/CompanyList";
import FooterDefault from "@/components/FooterDefault";
import { DEFAULT_FIRST_BUTTON_COLOR, DEFAULT_SECOND_BUTTON_COLOR } from "@/utils/constants";
// import { DateField } from "@mui/x-date-pickers";


const Avaliacao = () => {

  const buttons = [
    { name:'Autorizar', 
      color: DEFAULT_FIRST_BUTTON_COLOR,
      msg: 'Ao autorizar o encerramento da demanda, o fluxo será interrompido e não será possível retomar a execução.'
    },
    { name:'Rejeitar', 
      color: DEFAULT_SECOND_BUTTON_COLOR,
      msg: 'Ao rejeitar o encerramento da demanda, ela será devolvida ao órgão responsável para que continue a execução da mesma.'
    },
    // { name:'Solicitar replanejamento',
    //   color: DEFAULT_THIRD_BUTTON_COLOR,
    //   msg: 'Ao autorizar o replanejamento da demanda, ela retornará para o órgão responsável elaborar um novo planejamento.'
    // }
  ]

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField disabled fullWidth label='Nº da demanda' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Data de registro' />
        </Grid>
        <Grid size={12} component="div">
          <TextField fullWidth disabled label='Título' />
        </Grid>
        <Grid component="div" size={4}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth disabled>
              <InputLabel id='fornecedor'>Fornecedor</InputLabel>
              <Select
                id="fornecedor"
                label="Fornecedor"
              >
                <MenuItem value={1}>Verde</MenuItem>
                <MenuItem value={2}>Amarelo</MenuItem>
                <MenuItem value={3}>Vermelho</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid component="div" size={4}>
            <TextField fullWidth disabled label='Data' />
        </Grid>
        <Grid component="div" size={4}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth disabled>
              <InputLabel id='prioridade'>Prioridade</InputLabel>
              <Select
                id="prioridade"
                label="Prioridade"
              >
                <MenuItem value={1}>Verde</MenuItem>
                <MenuItem value={2}>Amarelo</MenuItem>
                <MenuItem value={3}>Vermelho</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Distrito' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Bairro' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth disabled label='Logradouro' />
        </Grid>
        <Grid component="div" size={6}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth disabled>
              <InputLabel id='programa'>Programa</InputLabel>
              <Select
                id="programa"
                label="Programa"
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
            <FormControl fullWidth disabled>
              <InputLabel id='orgaoresponsavel'>Órgão responsável</InputLabel>
              <Select
                id="orgaoresponsavel"
                label="Órgão responsável"
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
            disabled
            multiline
            rows={4}
            label='Descrição' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Orçamento previsto' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Prazo para execução' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth disabled label='Ação' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Quantidade de etapas' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Quantidade de funcionários' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth disabled label='Responsável técnico' />
        </Grid>
        <Grid component="div" size={6}>
          <FileUploadAndList label={'Arquivos'}/>
        </Grid>
        <Grid component="div" size={6}>
          <CompanyList/>
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Orçamento utilizado' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth disabled label='Etapas concluídas' />
        </Grid>
        <Grid component="div" size={6}>
          <FileUploadAndList label={'Imagens'}/>
        </Grid>
        <Grid component="div" size={6}>
          <FileUploadAndList label={'Relatórios'}/>
        </Grid>
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
      <FooterDefault buttons={buttons}/>
    </Container>
    // </LocalizationProvider>
  )
}
  
export default Avaliacao;