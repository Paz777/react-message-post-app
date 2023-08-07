import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList() {

    const [enteredBody, setEnteredBody] = useState('Body');
    const [enteredAuthor, setEnteredAuthor] = useState('Author');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function onBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return <>
        {modalIsVisible && <Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={onBodyHandler} onAuthorChange={onAuthorHandler} />
        </Modal>}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Dobby" body="I am learning react" />
        </ul>
    </>
}

export default PostsList;