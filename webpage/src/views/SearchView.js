import React, { useEffect, useState } from 'react';
import newsController from '../controllers/NewsController';
import NewsInfoView from './NewsInfoView';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

const SearchView = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query') || '';
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy,searchIn=title,description&apiKey=b70d50e3ea6a4c32b23c49337d4d4d77`;

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            const data = await newsController.fetchNewsData(apiUrl);
            setArticles(data);
        };

        fetchNewsData();
    }, [apiUrl]);

    return (
        <div>
            {articles ? (
                articles.length > 0 ? (
                    <NewsInfoView url={apiUrl} title={`Displaying articles for: ${query}`} />
                ) : (
                    <Typography sx={{ fontFamily: "Segoe UI", fontSize: "20px", marginTop: '40px' }}>
                        There are no articles that match: ${query}
                    </Typography>

                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SearchView;
