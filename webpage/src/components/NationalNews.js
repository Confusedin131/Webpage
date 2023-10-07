import React from 'react'
import NewsInfo from './NewsInfo'

const USNewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b70d50e3ea6a4c32b23c49337d4d4d77';

const NationalNews = () => {
    return (
        <div>
            <NewsInfo url={USNewsUrl} title='Top US Headlines' />
        </div>
    )
}

export default NationalNews
