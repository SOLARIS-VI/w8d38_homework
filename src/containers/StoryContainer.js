import React, {useState, useEffect} from 'react';
import StorySelect from '../components/StorySelect';
import StoryDetail from '../components/StoryDetail';

const StoryContainer = () => {
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => {
            const storyPromises = data.slice(0, 100).map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res=>res.json())
            });
            Promise.all(storyPromises).then(setStories);
        });
    }, []);

    const handleSelectChange = (story) => {
        setSelectedStory(story);
    }

    return (
        <>
        <h1>Top Hacker Stories</h1>
        <StorySelect stories={stories} handleSelectChange={handleSelectChange} />
        <StoryDetail selectedStory={selectedStory} />
        </>
    );
};

export default StoryContainer;
