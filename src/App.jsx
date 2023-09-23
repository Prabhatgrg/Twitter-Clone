import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 items-start">
                    <div className="h-full left-sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-span-2"></div>
                    <div className="h-full right-sidebar">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
