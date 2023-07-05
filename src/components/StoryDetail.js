import React from 'react';

const StoryDetail = ({selectedStory}) => {

    if (!selectedStory) {
        return <div>Select a story to see the details.</div>;
    }

    return (
        <div>
            <h2>{selectedStory.title}</h2>
            <p>Author: {selectedStory.by}</p>
            <a href={selectedStory.url}>Read more</a>
        </div>
    );
};

export default StoryDetail;
