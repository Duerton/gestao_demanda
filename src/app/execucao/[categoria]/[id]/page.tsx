
import { getCadastro, handleSubmit } from "@/fetch/fetchCadastro";
import FormExecucao from "../../components/Formexecucao";


async function Execucao ( {
    params
  } : {
    params: Promise<{categoria: string, id:string}>
  }) {

  const {categoria, id} = (await params)
  const data = id === 'new' ? {} : await getCadastro(id);

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <FormExecucao
      id={id}
      values={data}
      categoria={categoria}
    />
  )
}
  
export default Execucao;