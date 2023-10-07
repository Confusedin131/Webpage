import React from 'react'
import NewsInfo from './NewsInfo'
const michiganNewsUrl = 'https://newsapi.org/v2/everything?q=Michigan&searchIn=title&sortBy=popularity&pageSize=30&apiKey=b70d50e3ea6a4c32b23c49337d4d4d77';

const MichiganNews = () => {
    return (
        <div>
            <NewsInfo url={michiganNewsUrl} title='Top Michigan Headlines' />
        </div>
    )
}

export default MichiganNews
