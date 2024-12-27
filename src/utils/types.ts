import { GridRowsProp } from "@mui/x-data-grid"

export interface Demanda {
  num_demanda: number,
  data_registro: string,
  titulo: string,
  fornecedor: string,
  data_data: string,
  prioridade: string,
  distrito: string,
  bairro: string,
  logradouro: string,
  programa: string,
  orgao: string,
  descricao: string,
  id: number,
  estado: Estados,
  orcamentoprevisto?: '',
  prazoexecucao?: '',
  acao?: '',
  qtdfuncionarios?: 0, 
  qtdetapas?: 0,
  responsavel?: '',
  empresas?: GridRowsProp,
  orcamentoutilizado?: string,
  etapasconcluidas?: string,
  
}

export enum Estados {
  ANALISE = 'Análise',
  PLANEJAMENTO = 'Planejamento',
  AVALIACAO = 'Avaliação',
  REPLANEJAMENTO = 'Replanejamento',
  ENCERRAMENTO = 'Encerramento',
  AUTORIZACAO = 'Autorização',
  EXECUCAO = 'Execução',
  ENCERRADO = 'Encerrado',
  CONCLUIDO = 'Concluído'
}

export interface RowGridEmpresas {
  id: number,
  cnpj: string,
  nome: string,
  isNew?: boolean
}

export interface Columns {
  field: string,
  headerName: string,
  type: string,
  width: number,
  editable: boolean,
  headerAlign: string,
  align: string
}

export interface Option { 
  pagina: string; 
  href: string; 
} 

export interface OptionsListProps { options: Option[] }