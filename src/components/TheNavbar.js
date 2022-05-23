import { Link } from "react-router-dom";
import classes from './css/TheNavbar.module.css';

function TheNavbar(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                React meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All meetups</Link>
                    </li>
                    <li>
                        <Link to="/newMeetup">New meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default TheNavbar;