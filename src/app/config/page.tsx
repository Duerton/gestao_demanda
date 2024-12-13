import { Container } from "@mui/material"
import CompanyList from "../planejamento/components/CompanyList"
import Grid from '@mui/material/Grid2';

const Config = () => {

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container>
      <Grid container spacing={2}>
        <Grid component="div" size={6}>
          <CompanyList/>
        </Grid>
        <Grid component="div" size={6}>
          <CompanyList/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Config;