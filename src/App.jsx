import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 items-start">
                    <Sidebar />
                    <div className="col-span-2"></div>
                    <RightSidebar />
                </div>
            </div>
        </>
    );
}

export default App;
