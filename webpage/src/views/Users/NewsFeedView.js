// NewsFeedView.jsx
import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import newsController from '../../controllers/NewsController';
import { Divider } from '@mui/material';

const NewsFeedView = ({ url, category }) => {
    const [articles, setArticles] = useState([]);
    const fetchInterval = 6 * 60 * 60 * 1000; // 5 hours

    const fetchNews = useCallback(async () => {
        try {
            const data = await newsController.fetchNewsData(url);
            if (data.length > 0) {
                setArticles(data);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
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
            <Typography variant="h4" sx={{ textAlign: 'left', margin: '25px', fontWeight: "bold", fontFamily: "Segoe UI" }}>
                {category}
            </Typography>
            <Grid container spacing={2}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardActionArea component="a" href={article.url} target="_blank">
                                {article.urlToImage && (
                                    <CardMedia component="img" alt="Article" height="140" image={article.urlToImage} />
                                )}
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.author}, {article.source}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br />
            <br />
            <Divider sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
        </div>
    );
};

export default NewsFeedView;
