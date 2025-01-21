import '../styles/ErrorPage.css'
import { Link } from "react-router-dom";

function errorPage() {

    return(
      <div className='notFound'>
        <div>
            <h1>Oops! Page Not Found</h1>
            <p>We couldn&apos;t find the page you were looking for.</p>
            <Link to="/">
                Back To Home
            </Link>
        </div>
      </div>
    )
}

export default errorPage;