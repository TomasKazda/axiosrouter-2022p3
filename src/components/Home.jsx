import { Link, Outlet } from "react-router-dom";

const Home = () => {
    const dates = [];
    for (let i = 12; i < 18; i++)
    {
        dates.push(<li key={i}><Link to={"/date/2023-05-"+i}>2023-05-{i}</Link></li>)
    }
    return (<div>
        <h1>Hello World</h1>
        <ul>
            {dates}
        </ul>
        <Outlet />
        <Link to="about">About Us</Link>
    </div>)
}

export default Home;