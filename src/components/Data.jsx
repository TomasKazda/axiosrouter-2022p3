import {useState, useEffect} from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom";

const baseURL = "https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php?date=";

const Data = () => {
    const {d} = useParams()
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL+d).then((response) => {
        setPost(response.data);
      });
    }, [d]);

    return  <div>
                <h2>Datalist</h2>
                <p>Odeslané datum: {d}</p>
                <p>Přijaté datum: {post?.date}</p>
                <Link to="/">Go back!</Link>
            </div>
}

export default Data;