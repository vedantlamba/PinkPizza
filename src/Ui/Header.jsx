import SearchOrder from "../Features/Order/SearchOrder";
import logo from "../UX/icons/_ (3).jpg";
import Username from "../Features/User/username";
import Button from "./Button";

function Header() {
  return (
    <div className="flex w-[100vw] items-center justify-evenly px-4">
      {/* Logo */}
      <div className="flex items-center">
        <Button to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Button>
        <SearchOrder />
      </div>

      {/* Username aligned to the far right */}
      <div className="flex items-center">
        <Username />
      </div>
    </div>
  );
}

export default Header;
