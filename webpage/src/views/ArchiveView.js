import ArchiveController from "../controllers/ArchiveController";
import { Grid, Typography, Container } from "@mui/material";

const ArchiveView = () => {
  return (
    <Container>


      <ArchiveController>
        {(archivedPosts) => (

          <div>
            <Typography sx={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px', variant: 'h1', fontFamily: 'Segoe UI' }}>
              Archived Posts
            </Typography>

            <Grid>
              {archivedPosts
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                .map((post, index) => (
                  <div key={post.id}>
                    <Typography variant='h4' sx={{ marginTop: '30px', fontFamily: 'Segoe UI', fontWeight: 'bold', textAlign: 'left' }}>
                      {post.title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'medium', marginTop: '10px', fontFamily: 'Segoe UI', textAlign: 'left' }}>
                      {post.date} by {post.author}
                    </Typography>
                    <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', marginTop: '10px', textIndent: '45px', fontFamily: 'Segoe UI', textAlign: 'left', marginBottom: index === archivedPosts.length - 1 ? '70px' : "0px", }}>
                      {post.bodyText.replace(/__NEWLINE__/g, '\n\n         ').replace(/__NEWLINE__\s*$/, '')}

                    </Typography>
                  </div>
                ))}
            </Grid>
          </div>
        )}
      </ArchiveController>
    </Container>
  );
};

export default ArchiveView;
