import { Link } from "react-router-dom";

import styles from "./not-found-page.module.css"

const NotFoundPage = () => {
    return (
       <div>
            <h2>Oops, it seems that such a page doesn't exist</h2>
            <Link to="/">Go back to the Home page</Link>
       </div> 
    )
}

export default NotFoundPage;