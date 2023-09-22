import user from "../../assets/img/default-user.png";
import logo from "../../assets/img/logo.svg";
import styles from "./Sidebar.module.css";
import { useState, useSyncExternalStore } from "react";
import { RiHome7Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { PiSmileySad } from "react-icons/pi";

const Sidebar = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <>
      <div className="main-sidebar flex-col">
        <div className={styles.sidebar}>
          <div className="main-sidebar-content">
            <Link to="#" className="py-2 px-3 inline-block">
              <img src={logo} alt="Main logo" />
            </Link>
            <ul>
              <li>
                <Link to="#">
                  <RiHome7Fill />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <AiOutlineSearch />
                  Explore
                </Link>
              </li>
              <li>
                <Link to="#">
                  <IoMdNotificationsOutline />
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaRegEnvelope />
                  Messages
                </Link>
              </li>
              <li>
                <Link to="#">
                  <RiFileList2Line />
                  Lists
                </Link>
              </li>
              <li>
                <Link to="#">
                  <IoPeopleOutline />
                  Communities
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaXTwitter />
                  Verified
                </Link>
              </li>
              <li>
                <Link to="#">
                  <BsPerson />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CiCircleMore />
                  More
                </Link>
              </li>
            </ul>
            <div className="post-button mt-4">
              <button className="bg-primary w-3/5 px-5 py-3 rounded-full hover:bg-primary-hover">
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="main-useraccount-info flex items-center gap-4">
          <div className={styles.useraccountImg}>
            <img src={user} alt="User" />
          </div>
          <div className="useraccount-details">
            <div className="user">
              <span>Prabhat</span>
            </div>
            <div className="username">
              <span>@PrabhatGurung12</span>
            </div>
          </div>
          <div className="useraccount-more">
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
