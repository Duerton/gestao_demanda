export const DEFAULT_FIRST_BUTTON_COLOR = '#6EADE1'
export const DEFAULT_SECOND_BUTTON_COLOR = '#AF3D36'
export const DEFAULT_THIRD_BUTTON_COLOR = '#625B71'

export const DEFAULT_BUTTONS = [
  { name:'Salvar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg:''
  },
]

export const buttonsCadastro = [
  { name:'Despachar', 
    color: DEFAULT_FIRST_BUTTON_COLOR,
    msg: 'Ao despachar a demanda, será enviado um memmorando para o órgão responsável iniciar o planejamento'
  },
  { name:'Encerrar', 
    color: DEFAULT_SECOND_BUTTON_COLOR,
    msg: 'Ao encerrar a demanda não será mais possível executar nenhuma ação sobre ela'
  },
  { name:'Repriorizar',
    color: DEFAULT_THIRD_BUTTON_COLOR,
     msg: 'Ao repriorizar uma demanda, ela terá sua prioridade alterada e retornará para a lista de demandas enquanto aguarda nova análise'
  }
]