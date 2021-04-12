import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../redux/state"


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = apdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        number={p.id} />)

    return (
        <div className={s.postsBlock}>

            <h3>
                My posts
            </h3>
            <div>
                <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )

}

export default MyPosts