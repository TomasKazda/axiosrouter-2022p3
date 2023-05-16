import { Link } from "react-router-dom";

const About = ({who = "Anonymous"}) => (
    <div>
        About ... <Link to="/">Go back!</Link>
        <p>author: {who}</p>
    </div>
)

export default About;