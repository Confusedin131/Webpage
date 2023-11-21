import { getDatabase, ref, remove } from 'firebase/database';

const DeletePostController = (postId) => {
  const handleDelete = async () => {
    const database = getDatabase();
    const postRef = ref(database, `posts/${postId}`);
    const archiveRef = ref(database, `archives/${postId}`);

    try {
      await remove(postRef);
      console.log('Post deleted successfully from "posts"');

      await remove(archiveRef);
      console.log('Post deleted successfully from "archives"');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return {
    handleDelete,
  };
};

export default DeletePostController;
