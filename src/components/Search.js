import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate()
  const submitHandler = () => {
    navigate('/quote')
  }
  return (
    <div>
      <form onClick={submitHandler}>
        <Button variant='contained'>Get a Tweet from Trump</Button>
      </form>
    </div>
  )
}

export default Search
