import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import LocalNewsController from '../../controllers/LocalNewsController';
import DeletePostController from '../../controllers/admin/DeletePostController';
const DeletePost = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.slice(0, maxLength).trim();
    return `${truncated}...`;
  };

  const handleDeletePost = (postId, fetchData) => {
    const deletePostController = DeletePostController(postId);
    deletePostController.handleDelete();

    // After deleting the post, trigger a re-fetch of data
    fetchData();
  };
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '40px', fontFamily: 'Segoe UI' }}>
        Delete Post
      </Typography>
      <LocalNewsController>
        {(posts, archposts, fetchData) => (
          <Grid>
            {posts.map((post, index) => (
              <div key={post.id}>
                <Typography variant='h4' sx={{ marginTop: index === 0 ? '0px' : '25px', fontFamily: 'Segoe UI', fontWeight: 'bold', textAlign: 'left' }}>
                  {post.title}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeletePost(post.id, fetchData)}
                    sx={{ marginLeft: '40px', fontFamily: 'Segoe UI' }}
                  >
                    Delete
                  </Button>
                </Typography>
                <Typography variant='subtitle1' sx={{ fontWeight: 'medium', marginTop: '10px', fontFamily: 'Segoe UI', textAlign: 'left' }}>
                  {post.date} by {post.author}
                </Typography>
                <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', marginTop: '10px', textIndent: '45px', fontFamily: 'Segoe UI', textAlign: 'left' }}>
                  {truncateText(post.bodyText.replace(/__NEWLINE__/g, '\n\n         '), 300)}
                </Typography>

              </div>
            ))}
            {archposts.map((archive, index) => (
              <div key={archive.id}>
                <Typography variant='h4' sx={{ marginTop: index === 0 ? '25px' : '25px', fontFamily: 'Segoe UI', fontWeight: 'bold', textAlign: 'left' }}>
                  {archive.title}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeletePost(archive.id, fetchData)}
                    sx={{ marginLeft: '40px', fontFamily: 'Segoe UI' }}
                  >
                    Delete
                  </Button>
                </Typography>
                <Typography variant='subtitle1' sx={{ fontWeight: 'medium', marginTop: '10px', fontFamily: 'Segoe UI', textAlign: 'left' }}>
                  {archive.date} by {archive.author}
                </Typography>
                <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', marginTop: '10px', textIndent: '45px', fontFamily: 'Segoe UI', textAlign: 'left' }}>
                  {truncateText(archive.bodyText.replace(/__NEWLINE__/g, '\n\n         '), 300)}
                </Typography>

              </div>
            ))}
          </Grid>
        )}
      </LocalNewsController>
    </Container>
  );
};

export default DeletePost;
