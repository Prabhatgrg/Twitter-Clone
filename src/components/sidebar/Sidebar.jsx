import {RiHome7Fill} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <ul>
            <li><Link to="#"><RiHome7Fill />Home</Link></li>
            <li><Link to="#"><AiOutlineSearch />Explore</Link></li>
            <li><Link to="#"><IoMdNotificationsOutline />Notifications</Link></li>
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
