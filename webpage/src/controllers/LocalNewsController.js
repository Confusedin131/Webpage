import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const LocalNewsController = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const postsRef = ref(database, 'posts');

        const handleDataChange = (snapshot) => {
            const postsData = snapshot.val();

            if (postsData) {
                const postsArray = Object.entries(postsData).map(([id, post]) => ({
                    id,
                    ...post,
                }));

                setPosts(postsArray);
            } else {
                setPosts([]);
            }
        };

        onValue(postsRef, handleDataChange);

        return () => {
            off(postsRef, 'value', handleDataChange);
        };
    }, []);
    return children(posts);
};

export default LocalNewsController;
