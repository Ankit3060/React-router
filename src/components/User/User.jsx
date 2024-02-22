import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  return (
    <div>User: {useParams} </div>
  )
}

export default User