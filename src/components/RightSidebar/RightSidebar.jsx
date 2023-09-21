import Searchbar from "./Searchbar";
import Subscription from "./Subscription";
import Trends from "./Trends";

const RightSidebar = () => {
    return (
        <div className="sticky top-0">
            <Searchbar />
            <Subscription />
            <Trends />
        </div>
    );
};

export default RightSidebar;
