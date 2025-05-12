import React from 'react'

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
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul class="list-group">
                            {posts.map((post) => {
                                return (
                                    <li key={post.id}>
                                        {post.title}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main