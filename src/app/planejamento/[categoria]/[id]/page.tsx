import { getCadastro  } from "@/fetch/fetchCadastro";
import FormPlanejamento from "../../components/FormPlanejamento";
// import { DateField } from "@mui/x-date-pickers";

async function Planejamento ( {
    params
  } : {
    params: Promise<{categoria: string, id:string}>
  }) {

  const {categoria, id} = (await params)
  const data = id === 'new' ? {} : await getCadastro(id);
  
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <>
      <FormPlanejamento 
        id={id}
        values={data}
        categoria={categoria}
      />
    </>
    // </LocalizationProvider>
  )
}
  
export default Planejamento;