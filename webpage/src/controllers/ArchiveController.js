import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const ArchiveController = ({ children }) => {
  const [archivedPosts, setArchivedPosts] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const archiveRef = ref(database, 'archives');

    const handleDataChange = (snapshot) => {
      const archivedPostsData = snapshot.val();

      if (archivedPostsData) {
        const archivedPostsArray = Object.entries(archivedPostsData).map(([id, post]) => ({
          id,
          ...post,
        }));
        console.log(archivedPostsData)
        setArchivedPosts(archivedPostsArray);
      } else {
        setArchivedPosts([]);
      }
    };

    onValue(archiveRef, handleDataChange);

    return () => {
      off(archiveRef, 'value', handleDataChange);
    };
  }, []);

  return children(archivedPosts);
};

export default ArchiveController;
