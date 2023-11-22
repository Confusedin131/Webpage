import { useEffect, useState } from 'react';
import { getDatabase, ref, get, update } from 'firebase/database';
import { auth } from '../../models/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyFeedController = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const apiKey = 'b70d50e3ea6a4c32b23c49337d4d4d77';

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          // Data exists for the user
          setUserData(snapshot.val());
        } else {
          console.log('User data not found.');
        }
      }
    };

    fetchUserData();
  }, [user]);

  const generateNewsLinks = () => {
    const apiUrlBase = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=4&page=1&category=';
    const newsLinks = [];

    // Loop through userPrefs and generate links for categories set to true
    for (const category in userData?.prefs || {}) {
      if (userData.prefs[category]) {
        const apiUrl = `${apiUrlBase}${category}&apiKey=${apiKey}`;

        newsLinks.push({ category, link: apiUrl });
      }
    }

    return newsLinks;
  };

  const toggleCategory = async (category) => {
    if (user && userData) {
      // Update the specific category in prefs
      const db = getDatabase();
      const userPrefsRef = ref(db, `users/${user.uid}/prefs`);

      try {
        const snapshot = await get(userPrefsRef);
        const currentPrefs = snapshot.exists() ? snapshot.val() : {};
        const updatedPrefs = { ...currentPrefs, [category]: !currentPrefs[category] || false };

        update(userPrefsRef, updatedPrefs);
        setUserData({ ...userData, prefs: updatedPrefs });
      } catch (error) {
        console.error('Error toggling category:', error);
      }
    }
  };

  return {
    userData,
    generateNewsLinks,
    toggleCategory,
  };
};

export default MyFeedController;
