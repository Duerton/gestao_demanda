import FooterDefault from "@/components/FooterDefault";
import HeaderName from "@/components/HeaderComponent";
import { getCadastro, handleSubmitCadastro } from "@/fetch/fetchCadastro";
import { buttonsCadastro, DEFAULT_BUTTONS } from "@/utils/constants";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
// import { DateField } from "@mui/x-date-pickers";

async function Cadastro ( {
    params
  } : {
    params: Promise<{categoria: string, id:string}>
  }) {

  const {categoria, id} = (await params)
  const isEdit = categoria === 'action'
  
  const data = id === 'new' ? {} : await getCadastro(id);

  return (
    // {/* // <LocalizationProvider dateAdapter={AdapterDayjs}> */}
    <form action={handleSubmitCadastro}>
      <HeaderName name={'Cadastro de demanda'}/>
      <input type='hidden' value={id} name="id"></input>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField 
            fullWidth 
            name="num_demanda" 
            defaultValue={data.num_demanda}
            label='Nº da demanda' 
            disabled={isEdit}
            />
        </Grid>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth 
            label='Data de registro' 
            name="data_registro" 
            defaultValue={data.data_registro}
            disabled={isEdit}
            />
        </Grid>
        <Grid size={12} component="div">
          <TextField 
            fullWidth 
            name="titulo" 
            label='Título' 
            defaultValue={data.titulo}
            disabled={isEdit}
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
                disabled={isEdit}
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
              disabled={isEdit}
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
                disabled={isEdit}
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
            disabled={isEdit}
            />
        </Grid>
        <Grid component="div" size={6}>
          <TextField 
            fullWidth 
            label='Bairro'
            name="bairro"
            defaultValue={data.bairro}  
            disabled={isEdit}
            />
        </Grid>
        <Grid component="div" size={12}>
          <TextField 
            fullWidth 
            label='Logradouro' 
            name="logradouro"
            defaultValue={data.logradouro}  
            disabled={isEdit}
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
                disabled={isEdit} 
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
                disabled={isEdit}
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
            disabled={isEdit}
            />
        </Grid>
      </Grid>
      <FooterDefault 
        buttons={isEdit ? buttonsCadastro : DEFAULT_BUTTONS} 
        data={data}
      />
    </form>
    // {/* // </LocalizationProvider> */}
  )
}
  
export default Cadastro;