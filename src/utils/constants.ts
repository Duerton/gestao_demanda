export const DEFAULT_FIRST_BUTTON_COLOR = '#6EADE1'
export const DEFAULT_SECOND_BUTTON_COLOR = '#AF3D36'
export const DEFAULT_THIRD_BUTTON_COLOR = '#625B71'

export const ANALISE = 'Análise';
export const PLANEJAMENTO = 'Planejamento'
export const AVALIACAO = 'Execução'
export const AUTORIZACAO = 'Autorização'

export const DEFAULT_BUTTONS = [
  { 
    name:'Salvar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:''
  },
]

export const buttonsCadastro = [
  { 
    name:'Despachar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao despachar a demanda, será enviado um memmorando para o órgão responsável iniciar o planejamento'
  },
  {
    name:'Encerrar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela'
  },
  { 
    name:'Repriorizar',
    color: DEFAULT_THIRD_BUTTON_COLOR,
    msg: 'Ao repriorizar uma demanda, ela terá sua prioridade alterada e retornará para a lista de demandas enquanto aguarda nova análise'
  }
]

export const BUTTONS_PLANEJAMENTO = [
  { 
    name:'Enviar planejamento', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:''
  },
]

export const BUTTONS_PLANEJAMENTO_AUTORIZACAO = [
  { 
    name:'Autorizar',
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao autorizar a execução da demanda, será enviado um memorando para o órgão responsável dando inicio ao prazo para execução.'
  },
  {
    name:'Encerrar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela'
  },
  { 
    name:'Replanejar',
    color: DEFAULT_THIRD_BUTTON_COLOR,
    msg: 'Ao replanejar a demanda, ela será devolvida para o órgão responsável e retornará para o passo anterior, aguardando um novo planejamento.'
  }
]

export const statusRoute = (param: string) : string => {
  console.log('param', param);
  
  switch (param) {
    case ANALISE: {return 'cadastro'}
    case PLANEJAMENTO: {return 'planejamento'}
    case AVALIACAO: {return 'avaliacao'}
    case AUTORIZACAO: {return 'planejamento'}
    default : return ''
  }
}