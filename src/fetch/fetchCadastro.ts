"use server"

import { revalidateTag } from "next/cache"

export async function getCadastro() {
  const response = await fetch('http://localhost:3333/demanda/1', {
    next: {
      tags: ['get-cadastro']
    }
  })
  const data = await response.json()
  return data
}

export async function handleSubmitCadastro(form: FormData) {
      
  const fields = Object.fromEntries(form.entries())
  
  console.log(fields)
  
  await fetch('http://localhost:3333/demanda/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields)
  })

  revalidateTag('get-cadastro')
}

// export async function handleSubmitCadastro(form: FormData) {
//   "use server"
      
//   const fields = Object.fromEntries(form.entries())
  
//   console.log(fields)
  
//   await fetch('http://localhost:3333/demanda/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(fields)
//   })

//   revalidateTag('get-cadastro')

// }