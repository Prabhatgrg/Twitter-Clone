import Sidebar from "./components/sidebar/Sidebar";
import Searchbar from "./components/Search/Searchbar";

function App() {
    return (
        <>
          <div class="container mx-auto px-10">
            <Sidebar/>
            <Searchbar />
          </div>
        </>
    );
}

export default App;
