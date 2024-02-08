import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
       <div>
            <h2>Oops, it seems that such a page doesn't exist</h2>
            <Link to="/">Go back to the Home page</Link>
       </div> 
    )
}

export default NotFoundPage;