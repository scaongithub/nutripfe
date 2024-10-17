import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([
        { id: 1, author: 'Jane Doe', date: '2024-04-16', content: 'Great article! I\'ve started implementing some of these habits with my kids.' },
        { id: 2, author: 'John Smith', date: '2024-04-17', content: 'The video really puts things into perspective. Thanks for sharing!' }
    ]);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === '' || name.trim() === '') return;

        const comment = {
            id: comments.length + 1,
            author: name,
            date: new Date().toISOString().split('T')[0],
            content: newComment
        };

        setComments([...comments, comment]);
        setNewComment('');
        setName('');
    };

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comments</h3>

            {comments.map((comment) => (
                <div key={comment.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-900">{comment.author}</span>
                        <span className="ml-2 text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                </div>
            ))}

            <form onSubmit={handleSubmit} className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Leave a comment</h4>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                        id="comment"
                        rows="4"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentSection;