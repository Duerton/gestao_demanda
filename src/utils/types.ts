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
  estado: Estados
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