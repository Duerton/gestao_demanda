import FooterDefault from "@/components/FooterDefault";
import { getCadastro, handleSubmitCadastro } from "@/fetch/fetchCadastro";
import { buttonsCadastro } from "@/utils/constants";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
// import { DateField } from "@mui/x-date-pickers";

async function Cadastro() {

  const data = await getCadastro();

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <form action={handleSubmitCadastro}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField 
            fullWidth 
            name="num_demanda" 
            defaultValue={data.num_demanda}
            label='Nº da demanda' 
          />
        </Grid>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth 
            label='Data de registro' 
            name="data_registro" 
            defaultValue={data.data_registro}
          />
        </Grid>
        <Grid size={12} component="div">
          <TextField 
            fullWidth 
            name="titulo" 
            label='Título' 
            defaultValue={data.titulo}
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
                defaultValue={data.fornecedor || '0'}
              >
                <MenuItem value={0}>Vazio</MenuItem>
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
                defaultValue={data.prioridade || '0'}
              >
                <MenuItem value={0}>Vazio</MenuItem>
                <MenuItem value={1}>Verde</MenuItem>
                <MenuItem value={2}>Amarelo</MenuItem>
                <MenuItem value={3}>Vermelho</MenuItem>
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
          />
        </Grid>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth 
            label='Bairro'
            name="bairro"
            defaultValue={data.bairro}  
          />
        </Grid>
        <Grid component="div" size={12}>
          <TextField 
            fullWidth 
            label='Logradouro' 
            name="logradouro"
            defaultValue={data.logradouro}  
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
                defaultValue={data.programa || '0'}  
              >
                <MenuItem value={0}>Vazio</MenuItem>
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
                defaultValue={data.orgao || '0'}  
              >
                <MenuItem value={0}>Vazio</MenuItem>
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
          />
        </Grid>
      </Grid>
      <FooterDefault buttons={buttonsCadastro}/>
    </form>
    // </LocalizationProvider>
  )
}
  
export default Cadastro;