import '../App.css';



const Home = ({ signOut }) => {
    return (
        <div>
            <h1 class="title">Home is good</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
};

export default Home;