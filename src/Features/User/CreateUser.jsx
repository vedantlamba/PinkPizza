import { useState } from "react";
import Button from "../../Ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "../../Features/User/userSlice";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {

    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if(!name) return;
        console.log(name);
        dispatch(updateName(name));
        navigate('/menu');

    }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        className="mb-8 p-2 pl-4 w-72 rounded-full bg-secondary-soft outline-none font-montserrat
          placeholder:text-secondary-dark text-secondary-dark"
        placeholder="What's Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name !== "" && (
        // <Button
        //   to="/menu"
        //   type="primary"
        //   px="4"
        //   py="2"
        //   buttonType='submit'
        // >
        //   Look At Our Menu
        // </Button>
        <button className="font-montserrat border-secondary-dark bg-secondary-dark px-4 py-2 rounded-full ">
            Look At Our Menu
        </button>
      )}
    </form>
  );
}

export default CreateUser;
