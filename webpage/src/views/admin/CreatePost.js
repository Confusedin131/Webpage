import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import CreatePostController from '../../controllers/CreatePostController'

const CreatePost = () => {
  const controller = CreatePostController();
  const { title, author, date, text, handleTitleChange, handleAuthorChange, handleDateChange, handleTextChange, handleCreatePost } = controller;



  return (
    <div>
      <Container >
        <Typography sx={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px', variant: 'h1', fontFamily: 'Segoe UI' }}>
          Create Post
        </Typography>
        <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
          Article Title
        </Typography>
        <TextField
          sx={{ whiteSpace: 'pre-line', width: '600px' }}
          required
          multiline
          value={title}

          onChange={handleTitleChange}
        />
        <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
          Date Posted
        </Typography>
        <TextField
          sx={{ whiteSpace: 'pre-line', width: '600px' }}
          required
          multiline
          value={date}
          onChange={handleDateChange}
        />
        <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
          Author
        </Typography>
        <TextField
          sx={{whiteSpace: 'pre-line', width: '600px' }}
          required
          multiline
          value={author}
          onChange={handleAuthorChange}
        />
        <Typography sx={{ marginTop: '30px', fontWeight: 'medium', fontSize: '25px', variant: 'h2', fontFamily: 'Segoe UI' }}>
          Input Body
        </Typography>
        <TextField
          sx={{ whiteSpace: 'pre-line', width: '600px' }}
          required
          multiline
          value={text}
          onChange={handleTextChange}
        />
        <br />
        <Button

          sx={{ fontFamily: 'Segoe UI', marginTop: '10px' }}
          variant="contained"
          onClick={handleCreatePost}

        >Create Post</Button>

      </Container>

    </div>
  )
}

export default CreatePost
