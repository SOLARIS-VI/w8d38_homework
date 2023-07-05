import React from 'react';

const StoryDetail = ({selectedStory}) => {

    if (!selectedStory) {
        return <div className="select-story-message">PICK YOUR POISON</div>;
    }


    return (
        <div className="story-detail" style={{textAlign: "center"}}>
            <h2>{selectedStory.title}</h2>
            <p>Author: {selectedStory.by}</p>
            <a href={selectedStory.url}>Read more</a>
        </div>
    );
    
};

export default StoryDetail;
