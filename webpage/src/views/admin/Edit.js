import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const nav = useNavigate();

  const handleCreatePostClick = () => {
    nav('/create-post');
  };

  const handleEditAnnouncementClick = () => {
    nav('/edit-announcement');
  };

  const handleDeletePostClick = () => {
    nav('/delete-post');
  };

  return (
    <Container>
      <Typography sx={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px', variant: 'h1', fontFamily: 'Segoe UI' }}>
        Edit
      </Typography>
      <Button
        sx={{ fontFamily: 'Segoe UI', marginTop: '10px', marginRight: '10px', width: '200px', height: '50px' }}
        variant="contained"
        onClick={handleCreatePostClick}
      >
        Create Post
      </Button>
      <Button
        sx={{ fontFamily: 'Segoe UI', marginTop: '10px', marginRight: '10px', width: '200px', height: '50px' }}
        variant="contained"
        onClick={handleDeletePostClick}
      >
        Delete Post
      </Button>
      <Button
        sx={{ fontFamily: 'Segoe UI', marginTop: '10px', width: '200px', height: '50px' }}
        variant="contained"
        onClick={handleEditAnnouncementClick}
      >
        Edit Announcement
      </Button>
    </Container>
  );
};

export default Edit;
