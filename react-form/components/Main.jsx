import React, { useState } from 'react';

const initialPosts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
];

const Main = () => {
    const [newPost, setNewPost] = useState("");
    const [updatePosts, setPosts] = useState(initialPosts);

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (newPost.trim() === "") return;


        // aggiungo un nuovo oggetto
        const obj = {
            id: updatePosts.length ? updatePosts[updatePosts.length - 1].id + 1 : 1,
            title: newPost
        };

        // aggiorno la lista
        setPosts([...updatePosts, obj]);
        setNewPost(""); // resetta l'input
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-3">
                    <ul className="list-group">
                        {updatePosts.map((post) => (
                            <li className='list-group-item' key={post.id}>
                                {post.title}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={onHandleSubmit}>
                        <input
                            type="text"
                            placeholder='Nuovo Post'
                            className="form-control mt-4"
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary text-light mt-1">
                            Inserisci Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
