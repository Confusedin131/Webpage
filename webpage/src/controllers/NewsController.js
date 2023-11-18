import NewsModel from '../models/NewsModel';

class NewsController {
    constructor() {
        this.newsData = [];
    }

    fetchNewsData(apiUrl) {
        return fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.articles) {
                    this.newsData = data.articles
                    .filter((article) => article.title !== '[Removed]')
                    .map((article) =>
                        new NewsModel(
                            article.title,
                            article.description,
                            article.url,
                            article.urlToImage,
                            article.author
                        )
                    );
                }
                return this.newsData;
            })
            .catch((error) => {
                console.error('Error fetching news data:', error);
                return [];
            });
    }
}

const newsController = new NewsController();
export default newsController;
