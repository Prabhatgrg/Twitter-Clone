import {RiHome7Fill} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdNotificationsOutline, IoPeopleOutline} from 'react-icons/io';
import {FaRegEnvelope, FaXTwitter} from 'react-icons/fa';
import {RiFileList2Line} from 'react-icons/ri';
import {BsPerson} from 'react-icons/bs';
import {CiCircleMore} from 'react-icons/ci';


import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <ul>
            <li><Link to="#"><RiHome7Fill />Home</Link></li>
            <li><Link to="#"><AiOutlineSearch />Explore</Link></li>
            <li><Link to="#"><IoMdNotificationsOutline />Notifications</Link></li>
            <li><Link to="#"><FaRegEnvelope />Messages</Link></li>
            <li><Link to="#"><RiFileList2Line />Lists</Link></li>
            <li><Link to="#"><IoPeopleOutline />Communities</Link></li>
            <li><Link to="#"><FaXTwitter />Verified</Link></li>
            <li><Link to="#"><BsPerson />Profile</Link></li>
            <li><Link to="#"><CiCircleMore />More</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar;
