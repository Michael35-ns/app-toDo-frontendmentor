import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-cover bg-top h-80">
        <div className="container mx-auto px-4 pt-28 max-w-2xl">
          <div className="flex justify-between">
            <h2 className="font-bold text-3xl uppercase tracking-[0.4em] text-white">
              Todo
            </h2>
            <button>
              <MoonIcon/>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl mt-[-7rem] px-4">
        <form className="rounded-md bg-white flex px-2 items-center shadow-2xl mb-6">
          <span className="inline-block rounded-full border-2 border-gray-300 px-3 py-3"></span>
          <input
            className="w-full py-4 px-2 focus:outline-none"
            type="text"
            placeholder="Create a new todo"
          />
        </form>
        <div className="bg-white shadow-2xl rounded-md  border-gray-800">
          <div className="flex h-14 border-b p-3 border-gray-300 w-full py-2 items-center">
            <span className="inline-block rounded-full border-2 border-gray-300 h-7 w-7"></span>
            <h4 className="px-2 text-gray-400 line-through">
              Complete online JavaScript course
            </h4>
            <button className="ml-auto h-7">
              <img src="icon-cross.svg" />
            </button>
          </div>
          <div className="flex h-14 border-b p-3 border-gray-300 w-full py-2 items-center">
            <span className="inline-block rounded-full border-2 border-gray-300 h-7 w-7"></span>
            <h4 className="px-2 text-gray-600">
              Complete online JavaScript course
            </h4>
            <button className="ml-auto h-7">
              <CrossIcon />
            </button>
          </div>
          <div className="flex justify-between p-4">
            <span className="text-gray-400">5 items left</span>
            <div className="flex justify-center font-semibold">
              <button className="text-gray-400 px-2 hover:text-blue-600">
                All
              </button>
              <button className="text-gray-400 px-2 hover:text-blue-600">
                Active
              </button>
              <button className="text-gray-400 px-2 hover:text-blue-600">
                Completed
              </button>
            </div>
            <button className="text-gray-800">Clear Completed</button>
          </div>
        </div>
        <div className="flex justify-center py-16">
          <p className="text-gray-400">Drag and drop to reorder list</p>
        </div>
      </div>
    </>
  );
};

export default App;
