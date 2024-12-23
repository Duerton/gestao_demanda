import { Estados } from "./types";

export const DEFAULT_FIRST_BUTTON_COLOR = '#6EADE1'
export const DEFAULT_SECOND_BUTTON_COLOR = '#AF3D36'
export const DEFAULT_THIRD_BUTTON_COLOR = '#625B71'

export const DEFAULT_BUTTONS = [
  { 
    name:'Salvar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:'',
    estado: ''
  },
]

export const buttonsCadastro = [
  { 
    name:'Despachar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao despachar a demanda, será enviado um memmorando para o órgão responsável iniciar o planejamento',
    estado: Estados.PLANEJAMENTO
  },
  {
    name:'Encerrar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela',
    estado: Estados.ENCERRADO
  },
  { 
    name:'Repriorizar',
    color: DEFAULT_THIRD_BUTTON_COLOR,
    msg: 'Ao repriorizar uma demanda, ela terá sua prioridade alterada e retornará para a lista de demandas enquanto aguarda nova análise',
    estado: Estados.ANALISE
  }
]

export const BUTTONS_PLANEJAMENTO_EDIT = [
  { 
    name:'Salvar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:'',
    estado: Estados.PLANEJAMENTO
  },
]

export const BUTTONS_PLANEJAMENTO = [
  { 
    name:'Enviar planejamento', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:'Ao enviar para o planejamento a demanda ficará em estado de autorização para prosseguimento',
    estado: Estados.AUTORIZACAO
  },
]

export const BUTTONS_PLANEJAMENTO_AUTORIZACAO = [
  { 
    name:'Autorizar',
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao autorizar a execução da demanda, será enviado um memorando para o órgão responsável dando inicio ao prazo para execução.',
    estado: Estados.EXECUCAO
  },
  {
    name:'Encerrar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela',
    estado: Estados.ENCERRADO
  },
  { 
    name:'Replanejar',
    color: DEFAULT_THIRD_BUTTON_COLOR,
    msg: 'Ao replanejar a demanda, ela será devolvida para o órgão responsável e retornará para o passo anterior, aguardando um novo planejamento.',
    estado: Estados.PLANEJAMENTO
  }
]


export const BUTTONS_EXECUCAO = [
  { 
    name:'Concluir execução', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao concluir a execução da demanda, ela será devolvida para a secretaria de gestão avaliar os resultados obtidos.'
  },
  { 
    name:'Solicitar interrupção', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: ''
  },
  { 
    name:'Solicitar replanejamento',
    color: DEFAULT_THIRD_BUTTON_COLOR,
    msg: ''
  }
]

export const BUTTONS_ENCERRAMENTO = [
  { name:'Autorizar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao autorizar o encerramento da demanda, o fluxo será interrompido e não será possível retomar a execução.'
  },
  { name:'Rejeitar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao rejeitar o encerramento da demanda, ela será devolvida ao órgão responsável para que continue a execução da mesma.'
  }
]

export const BUTTONS_REPLANEJAMENTO = [
  { name:'Autorizar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao autorizar o replanejamento da demanda, ela retornará para o órgão responsável elabora um novo planejamento.'
  },
  { name:'Rejeitar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao rejeitar o replanejamento da demanda, ela será devolvida ao órgaõ responsável para que continue a execução da mesa..'
  }
]

export const BUTTONS_AVALIACAO = [
  { 
    name:'Concluir demanda', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:''
  },
]

export const statusRoute = (param: string) : string => {
  console.log('param', param);
  
  switch (param) {
    case Estados.ANALISE: {return 'cadastro'}
    case Estados.ENCERRADO: {return 'cadastro'}
    case Estados.EXECUCAO: {return 'execucao'}
    case Estados.PLANEJAMENTO: {return 'planejamento'}
    case Estados.AUTORIZACAO: {return 'planejamento'}
    case Estados.AVALIACAO: {return 'avaliacao'}
    case Estados.REPLANEJAMENTO: {return 'avaliacao'}
    case Estados.ENCERRAMENTO: {return 'avaliacao'}
    default : return ''
  }
}