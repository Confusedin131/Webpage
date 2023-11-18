// DeletePostController.js
import { getDatabase, ref, remove } from 'firebase/database';

const DeletePostController = (postId) => {
  const handleDelete = () => {
    const database = getDatabase();
    const postRef = ref(database, `posts/${postId}`);

    // Remove the post from the database
    remove(postRef)
      .then(() => {
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  return {
    handleDelete,
  };
};

export default DeletePostController;
