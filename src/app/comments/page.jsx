import React from 'react';

const commentsPage = () => {
    const  getComments = async() => {
        const res = fetch('http://localhost:3000/api/comments')
        const comments = (await res).json()
        return comments;
    }
    console.log(getComments());
    return (
        <div>
            <h2>comments page</h2>
        </div>
    );
};

export default commentsPage;

