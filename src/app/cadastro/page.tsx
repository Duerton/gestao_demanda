import FooterDefault from "@/components/FooterDefault";
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
// import { DateField } from "@mui/x-date-pickers";


const Cadastro = () => {

  const buttons = [
    { name:'Despachar', 
      color: '#6EADE1',
      msg: 'Ao despachar a demanda, será enviado um memmorando para o órgão responsável iniciar o planejamento'
    },
    { name:'Encerrar', 
      color: '#AF3D36',
      msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela'
    },
    { name:'Repriorizar',
      color: '#625B71',
       msg: 'Ao repriorizar uma demanda, ela terá sua prioridade alterada e retornará para a lista de demandas enquanto aguarda nova análise'
    }
  ]

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth label='Nº da demanda' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth label='Data de registro' />
        </Grid>
        <Grid size={12} component="div">
          <TextField fullWidth label='Título' />
        </Grid>
        <Grid component="div" size={4}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
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
            <TextField fullWidth label='Data' />
        </Grid>
        <Grid component="div" size={4}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
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
          <TextField fullWidth label='Distrito' />
        </Grid>
        <Grid component="div" size={6}>
          <TextField fullWidth label='Bairro' />
        </Grid>
        <Grid component="div" size={12}>
          <TextField fullWidth label='Logradouro' />
        </Grid>
        <Grid component="div" size={6}>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
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
            <FormControl fullWidth>
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
            multiline
            rows={4}
            label='Descrição' />
        </Grid>
      </Grid>
      <FooterDefault buttons={buttons}/>
    </Container>
    // </LocalizationProvider>
  )
}
  
export default Cadastro;