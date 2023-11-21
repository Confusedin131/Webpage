// views/MichiganNewsView.js
import React, { useEffect } from 'react';
import newsController from '../controllers/NewsController';
import NewsInfoView from './NewsInfoView';

const NationalNewsView = () => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b70d50e3ea6a4c32b23c49337d4d4d77';

  useEffect(() => {
    // Fetch news data when the component mounts.
    newsController.fetchNewsData(apiUrl);
  }, []);

  return (
    <NewsInfoView url={apiUrl} title='Top US Headlines' />);
};

export default NationalNewsView;
