const name = ['Hooby', 'Dobby'];

function Post() {
    const chosenName = Math.random() > 0.5 ? name[0] : name[1];
    return <div>
        <p>Hooby Dooby</p>
        <p>Learning react</p>
    </div>
}

export default Post;