import { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import Posts from '../../models/Posts';

const CreatePostController = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
 

  const handleCreatePost = (e) => {
    console.log('Post created'); 
    e.preventDefault();
    const textWithPlaceholder = text.replace(/\n/g, '__NEWLINE__');

    const newPost = new Posts(title, author, date, textWithPlaceholder);

    const database = getDatabase();
    const postsRef = ref(database, 'posts');

    
    push(postsRef, newPost);
    
    setTitle('');
    setAuthor('');
    setDate('');
    setText('');
  };

  return {
    title,
    author,
    date,
    text,
    handleTitleChange,
    handleAuthorChange,
    handleDateChange,
    handleTextChange,
    handleCreatePost,
  };
};

export default CreatePostController;
