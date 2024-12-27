import { useSelector } from "react-redux";


function Username() {


    const username = useSelector((state)=>state.user.username);
    console.log(username);
    if(!username) return;

  return (
    <div className="displayName ml-4 font-montserrat">
      <h2>{username}</h2>
    </div>
  );
}

export default Username;
