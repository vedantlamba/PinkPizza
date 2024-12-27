import { useSelector } from "react-redux";
import CreateUser from "../Features/User/CreateUser";
import Header from "./Header";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="bg-secondary-meduim w-[100vw] h-[100vh] flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Adjust logo size on small screens */}
        <h1 className="text-[100px] sm:text-[150px] lg:text-[200px] text-secondary-dark font-EduVIC mb-4">
          PinkPizza
        </h1>
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" px="2" type="primary">
            Continue Ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
