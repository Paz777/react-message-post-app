import Post from './Post';
import classes from './PostsList.module.css'

function PostsList() {
    return <ul className={classes.posts}>
        <Post author="Hobby" body="React is reactive" />
        <Post author="Dobby" body="I am learning react" />
    </ul>
}

export default PostsList;