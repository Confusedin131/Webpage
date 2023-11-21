import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
const AnnouncementController = () => {
    const [date, setDate] = useState('');
    const [announceText, setAnnounceText] = useState('');
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTextChange = (event) => {
        setAnnounceText(event.target.value);
    };

    const editAnnouncement = (e) => {
        e.preventDefault();
        const textWithPlaceholder = announceText.replace(/\n/g, '__NEWLINE__');
        const database = getDatabase();
        const announcementRef = ref(database, 'announcement');
        set(announcementRef, {
            date: date,
            announceText: textWithPlaceholder,
        });
        setAnnounceText('')
        setDate('')

    }
    return {
        date,
        announceText,
        handleDateChange,
        handleTextChange,
        editAnnouncement
    };
};

export default AnnouncementController
