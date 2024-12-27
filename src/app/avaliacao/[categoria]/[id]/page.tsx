
import { getCadastro } from "@/fetch/fetchCadastro";
import FormAvaliacao from "../../components/FormAvaliacao";

// import { DateField } from "@mui/x-date-pickers";

async function Avaliacao ( {
    params
  } : {
    params: Promise<{categoria: string, id:string}>
  }) {

  const {categoria, id} = (await params)
  const data = id === 'new' ? {} : await getCadastro(id);
  
  
  return (
    <>
      <FormAvaliacao
        id={id}
        values={data}
        categoria={categoria}
      />
    </>
  )
}
  
export default Avaliacao;