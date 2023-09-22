import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-4 items-start">
          <div className="left-sidebar">
            <Sidebar />
          </div>
          <div className="col-span-2"></div>
          <div className="right-sidebar">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
