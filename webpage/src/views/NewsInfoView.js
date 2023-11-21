import React, { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import newsController from '../controllers/NewsController';

const NewsInfoView = ({ url, title }) => {

  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const fetchInterval = 5 * 60 * 60 * 1000; // 5 hours

  const fetchNews = useCallback(async () => {
    const data = await newsController.fetchNewsData(url);
    console.log(data)

    if (data.length > 0) {
      setArticles(data);
      setCurrentArticle(data[0]);
    }
  }, [url]);

  useEffect(() => {
    const fetchNewsWrapper = async () => {
      await fetchNews();
    };

    fetchNewsWrapper();

    const interval = setInterval(() => {
      fetchNewsWrapper();
    }, fetchInterval);

    return () => clearInterval(interval);
  }, [fetchInterval, fetchNews]);

  return (
    <div>
      {currentArticle && (
        <Paper
          elevation={3}
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 3,
            height: '450px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${currentArticle.urlToImage})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img style={{ display: 'none' }} src={currentArticle.urlToImage} alt="Article" />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography fontWeight="medium" fontSize={40} fontFamily="Segoe UI" component="h1" variant="h3" color="inherit" gutterBottom>
                  {currentArticle.title}
                </Typography>
                <Typography variant="h5" fontWeight="regular" fontSize={20} fontFamily="inherit" color="inherit" paragraph>
                  {currentArticle.description}
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  <Button sx={{ backgroundColor: 'black', fontFamily: 'Segoe UI' }} size="large" variant="contained" href={currentArticle.url} target="_blank">
                    Read more . .
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
      <h1>{title}</h1>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {articles
          .filter((article) => article.title !== "[Removed]")
          .map((article, index) => (
            //console.log('Article:', article),


            <Grid item xs={12} md={5} key={index}>
              <CardActionArea component="a" href={article.url} target="_blank">
                <Card sx={{ display: 'flex', minHeight: '100%' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h1" variant="h5" fontWeight="bold" fontSize={20} fontFamily="Segoe UI">
                      {article.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" fontWeight="medium" fontSize={18} fontFamily="inherit">
                      {article.author}, {article.source}
                    </Typography>
                    <Typography variant="subtitle1" paragraph fontWeight="regular" fontSize={15} fontFamily="inherit">
                      {article.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary"></Typography>
                  </CardContent>
                  <CardMedia component="img" sx={{ width: 200, display: { xs: 'none', sm: 'block' } }} image={article.urlToImage} alt="Article" />
                </Card>
              </CardActionArea>

            </Grid>


          ))}

      </Grid>
    </div>
  );
};

export default NewsInfoView;
