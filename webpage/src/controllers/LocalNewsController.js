import { useEffect, useState } from 'react';
import { getDatabase, ref, get, set } from 'firebase/database';

const LocalNewsController = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [archposts, setArchPosts] = useState([]);
  const [announcement, setAnnouncement] = useState({});

  const fetchData = async () => {
    const database = getDatabase();
    const postsRef = ref(database, 'posts');
    const archiveRef = ref(database, 'archives');
    const announcementRef = ref(database, 'announcement')
    try {
      // Fetch posts
      const postsSnapshot = await get(postsRef);
      const postsData = postsSnapshot.val();

      if (postsData) {
        const currentDate = new Date();

        // Filter posts older than 30 days
        const postsToArchive = Object.entries(postsData)
          .filter(([id, post]) => {
            const postDate = new Date(post.timestamp);
            const daysDifference = (currentDate - postDate) / (1000 * 60 * 60 * 24);

            return daysDifference > 30;
          });

        // Set archived posts
        try {
          const newArchivesData = Object.fromEntries(postsToArchive);
          await set(archiveRef, newArchivesData);
          console.log('set archives..');
        } catch (error) {
          console.error('Error setting archives:', error);
        }

        // Set all remaining posts in the state
        const remainingPostsArray = Object.entries(postsData)
          .filter(([id, post]) => {
            const postDate = new Date(post.timestamp);
            const daysDifference = (currentDate - postDate) / (1000 * 60 * 60 * 24);

            return daysDifference <= 30;
          })
          .reverse()
          .map(([id, post]) => ({
            id,
            ...post,
          }));

        setPosts(remainingPostsArray);
      } else {
        setPosts([]);
      }

      // Fetch archived posts
      const archivesSnapshot = await get(archiveRef);
      const archivesData = archivesSnapshot.val();

      if (archivesData) {
        const archivesArray = Object.entries(archivesData)

          .map(([id, post]) => ({
            id,
            ...post,
          }));

        setArchPosts(archivesArray);
        console.log('archive' + archivesArray);

      } else {
        setArchPosts([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    //load announcements
    const announcementSnapshot = await get(announcementRef);
    const announcementData = announcementSnapshot.val();

    if (announcementData) {
      setAnnouncement(announcementData);
    } else {
      setAnnouncement({});
    }
  }

  useEffect(() => {

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every hour
    const intervalId = setInterval(() => {
      console.log('1hr!');
      fetchData();
    }, 3600000);

    return () => {
      clearInterval(intervalId);
      console.log('Cleanup function called');
    };
  }, []);

  return children(posts, archposts, announcement, fetchData);
};

export default LocalNewsController;
