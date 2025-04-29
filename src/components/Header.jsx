import MoonIcon from "./icons/MoonIcon";
const Header = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-cover bg-top h-80">
      <div className="container mx-auto px-4 pt-28 max-w-2xl">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl uppercase tracking-[0.4em] text-white">
            Todo
          </h2>
          <button>
            <MoonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
