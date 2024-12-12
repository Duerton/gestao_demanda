import FooterCadastro from "@/app/cadastro/components/FooterCadastro";
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FileUploadAndList from "./components/FileList";
import CompanyList from "./components/CompanyList";
// import { DateField } from "@mui/x-date-pickers";


const Planejamento = () => {
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
          <TextField fullWidth label='Orçamento previsto' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth label='Prazo para execução' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth label='Ação' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth label='Quantidade de etapas' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth label='Quantidade de funcionários' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth label='Responsável técnico' />
        </Grid>
        <Grid component="div" size={6}>
          <FileUploadAndList/>
        </Grid>
        <Grid component="div" size={6}>
          <CompanyList/>
        </Grid>
      </Grid>
      
      <FooterCadastro/>
    </Container>
    // </LocalizationProvider>
  )
}
  
export default Planejamento;