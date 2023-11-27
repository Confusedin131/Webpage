import React, { useEffect } from 'react';
import newsController from '../controllers/NewsController';
import NewsInfoView from './NewsInfoView';

const MichiganNewsView = () => {
  const apiUrl = 'https://newsapi.org/v2/everything?q=Michigan&searchIn=title&sortBy=popularity&pageSize=30&apiKey=b70d50e3ea6a4c32b23c49337d4d4d77';

  useEffect(() => {
    // Fetch news data when the component mounts.
    newsController.fetchNewsData(apiUrl);
  }, []);

  return (
    <NewsInfoView url={apiUrl} title='Top Michigan Headlines' />
  );
};

export default MichiganNewsView;
