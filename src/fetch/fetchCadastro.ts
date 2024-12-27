"use server"

import { Demanda } from '@/utils/types'
import { redirect } from 'next/navigation'

export async function getCadastro(id: string) {
  
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
  console.log('aqui', fields)

  let method = 'POST'
  let address = `http://localhost:3333/demanda`
  if (fields.id !== 'new') {
    method = 'PUT'
    address = `http://localhost:3333/demanda/${fields.num_demanda}`
  }
  const values = {...fields, estado: fields.estado, id: fields.num_demanda}

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

export async function handleSubmit(form: FormData) {
  const data = Object.fromEntries(form.entries())
  
  await fetch(`http://localhost:3333/demanda/${data.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  redirect('/listademanda');
}

export async function handleEstado(estado: string, data: Demanda, input: string) {
  const newData = {...data, estado: estado}

  await fetch(`http://localhost:3333/demanda/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  })

  redirect('/listademanda');
}

export async function getField( field : string) {
  const response = await fetch(`http://localhost:3333/{${field}}/`, {
    next: {
      tags: ['get-fornecedor']
    }
  })

  const data = await response.json()
  return data

}

export async function saveFieldsConfig(fields : FormData) {
  const data = Object.fromEntries(fields.entries())
  // TODO dividir data em 3 requisições ou preparar um endpoint para salvar todos os campos de uma vez
  
  await fetch(`http://localhost:3333/fornecedor}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  // redirect('/listademanda');
}

export async function createUser(prevState: any, formData: FormData) {
  // const res = await fetch('http://localhost:3333/createuser')
  // const json = await res.json()
 
  // if (!res.ok) {
  //   return { message: 'Please enter a valid email' }
  // }
 
  // redirect('/inicio')

  const data = Object.fromEntries(formData.entries())
  console.log('DATA', data)

  return { 
    message: 'Cadastrado',
    data: data
  }
}