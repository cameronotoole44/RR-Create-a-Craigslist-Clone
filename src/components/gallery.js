import React from 'react';
import Post from './Posting';

const craigPost = require('../postings')

let postList = craigPost.postings.map((data, i) => {
    return <Post data={data} key={i} />;
});

function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            {postList}
        </div>
    )
}

export default Gallery;