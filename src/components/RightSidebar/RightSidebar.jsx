import Searchbar from "./Searchbar";
import Subscription from "./Subscription";

const RightSidebar = () => {
    return (
        <div className="sticky top-0">
            <Searchbar />
            <Subscription />
        </div>
    );
};

export default RightSidebar;
