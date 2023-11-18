import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import LocalNewsController from '../../controllers/LocalNewsController';
import DeletePostController from '../../controllers/DeletePostController';

const DeletePost = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.slice(0, maxLength).trim();
    return `${truncated}...`;
  };

  const handleDelete = (postId) => {
    const deleteController = DeletePostController(postId);
    deleteController.handleDelete();
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '40px', fontFamily: 'Segoe UI' }}>
        Delete Post
      </Typography>
      <LocalNewsController>
        {(posts) => (
          <Grid>
            {posts.map((post, index) => (
              <div key={post.id}>
                <Typography variant='h4' sx={{ marginTop: index === 0 ? '0px' : '25px', fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant='subtitle1' sx={{ fontWeight: 'medium', marginTop: '10px', fontFamily: 'Segoe UI' }}>
                  {post.date} by {post.author}
                </Typography>
                <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', marginTop: '10px', textIndent: '45px', fontFamily: 'Segoe UI' }}>
                  {truncateText(post.bodyText.replace(/__NEWLINE__/g, '\n\n         '), 300)}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(post.id)}
                  sx={{ marginTop: '10px', fontFamily: 'Segoe UI' }}
                >
                  Delete
                </Button>
              </div>
            ))}
          </Grid>
        )}
      </LocalNewsController>
    </Container>
  );
};

export default DeletePost;
