import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Explore</Link></li>
            <li><Link to="#">Notifications</Link></li>
            <li><Link to="#">Messages</Link></li>
            <li><Link to="#">Lists</Link></li>
            <li><Link to="#">Communities</Link></li>
            <li><Link to="#">Verified</Link></li>
            <li><Link to="#">Profile</Link></li>
            <li><Link to="#">More</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar;
