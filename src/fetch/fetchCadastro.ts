"use server"

import { redirect } from 'next/navigation'

export async function getCadastro(id: string) {
  console.log('id', id);
  
  const response = await fetch(`http://localhost:3333/demanda/${id}`, {
    next: {
      tags: ['get-cadastro']
    }
  })
  const data = await response.json()
  return data
}

export async function handleSubmitCadastro(form: FormData) {
      
  const fields = Object.fromEntries(form.entries())
  
  let method = 'POST'
  let address = `http://localhost:3333/demanda`
  if (fields.id !== 'new') {
    method = 'PUT'
    address = `http://localhost:3333/demanda/${fields.num_demanda}`
  }
  const values = {...fields, estado: 'Análise', id: fields.num_demanda}

  await fetch(address, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  })

  // revalidateTag('get-cadastro')
  redirect('/listademanda');
}

export async function getListaDemanda() {
  const response = await fetch('http://localhost:3333/demanda', {
    next: {
      tags: ['lista-demanda']
    }
  })
  const data = await response.json()
  return data
}
