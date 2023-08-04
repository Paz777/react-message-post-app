import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css'
import { useState } from 'react';

function PostsList() {

    const [enteredBody, setEnteredBody] = useState('Body');
    const [enteredAuthor, setEnteredAuthor] = useState('Author');

    function onBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    return <>
        <NewPost onBodyChange={onBodyHandler} onAuthorChange={onAuthorHandler} />
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Dobby" body="I am learning react" />
        </ul>
    </>
}

export default PostsList;