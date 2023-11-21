class Posts {
  constructor(title, author, date, bodyText) {
    this.timestamp = new Date().toISOString();
    this.title = title;
    this.author = author;
    this.date = date;
    this.bodyText = bodyText;
  }
}

export default Posts;