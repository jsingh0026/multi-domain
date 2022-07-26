import { useRouter } from 'next/router'
import React from 'react'

function Sites() {
  const router = useRouter()
  console.log(router)
  return (
    <div>Sites</div>
  )
}

export default Sites