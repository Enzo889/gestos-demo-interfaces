import { ModeToggle } from "./components/mode-toggle";
import { TabsDemo } from "./components/tabs-content";

function App() {
  return (
    <>
      <div className="flex flex-col items-center  m-auto h-screen max-w-md ">
        <div className="flex justify-between  items-center w-full py-4 px-8 ">
          <h1>Demos</h1>
          <ModeToggle />
        </div>
        <div>
          {" "}
          <TabsDemo />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
