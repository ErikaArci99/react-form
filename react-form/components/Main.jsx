import React, { useState } from 'react'

const posts = [
    {
        id: 1,
        title: "Post 1",
    },
    {
        id: 2,
        title: "Post 2",
    },
    {
        id: 3,
        title: "Post 3",
    },
    {
        id: 4,
        title: "Post 4",
    },
    {
        id: 5,
        title: "Post 5",
    },
];

const Main = () => {
    const [newPost, setNewPost] = useState("");
    const [updatePosts, setPosts] = useState(posts);

    const onHandleSubmit = (e) => {
        e.preventDefault();

        // creo un nuovo oggetto
        const obj = {
            id: posts[posts.leght - 1].id + 1,
            title: newPost
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3">
                        <ul className="list-group">
                            {posts.map((post) => {
                                return (
                                    <li className='list-group-item' key={post.id}>
                                        {post.title}
                                    </li>
                                )
                            })}
                        </ul>
                        <form onSubmit={onHandleSubmit}>
                            <input type="text" placeholder='Nuovo Post' className="form-control mt-4" onChange={(e) => (setNewPost(e.target.value))} />
                            <button type="button" className="btn btn-primary text-light mt-1">Inserisci Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main