import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FollowItem = (props) => {
    const { avatar, name, username, varified, varifiedColor } = props;
    return (
        <div className="px-4 py-3 bg-dark hover:bg-dark-hover">
            <div className="flex gap-2 items-center">
                <Link to={`/profile/${username}`}>
                    <img className="w-12 h-12 rounded-full object-cover" src={avatar} alt={`profile of ${username}`} />
                </Link>
                <div className="flex gap-2 items-center grow">
                    <div className="flex flex-col grow">
                        <h3 className="text-md">
                            <Link to={`/profile/${username}`}>
                                <div className="flex gap-2 items-center">
                                    <span>{name}</span>
                                    {varified ? <BsPatchCheckFill className={varifiedColor != undefined ? `text-sm text-${varifiedColor}` : "text-sm text-primary"} /> : null}
                                </div>
                            </Link>
                        </h3>
                        <Link className="font-medium text-xs text-gray-400">@{username}</Link>
                    </div>
                    <button className="inline-block py-3 leading-4 px-4 rounded-full bg-white hover:bg-slate-100 text-black hover:text-black">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default FollowItem;
