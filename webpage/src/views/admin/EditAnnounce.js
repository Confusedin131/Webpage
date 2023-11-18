import React from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'

const EditAnnounce = () => {
  return (
    <Container >
      <Typography sx={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px', variant: 'h1', fontFamily: 'Segoe UI' }}>
        Edit Announcement
      </Typography>
      <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
        Date
      </Typography>
      <TextField
        sx={{ whiteSpace: 'pre-line', width: '600px' }}
        required
        multiline


      />
      <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
        Announcement Info
      </Typography>
      <TextField
        sx={{ whiteSpace: 'pre-line', width: '600px' }}
        required
        multiline


      />
      <br />
      <Button

        sx={{ fontFamily: 'Segoe UI', marginTop: '10px' }}
        variant="contained"

      >Edit Announcement</Button>
    </Container>
  )
}

export default EditAnnounce
