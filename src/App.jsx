import Sidebar from "./components/sidebar/Sidebar";
import Searchbar from "./components/Search/Searchbar";

function App() {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 items-start">
                    <Sidebar />
                    <div className="col-span-2"></div>
                    <Searchbar />
                </div>
            </div>
        </>
    );
}

export default App;
