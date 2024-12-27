import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <div className="orderSearch">
      <form onSubmit={handleSubmit}>
        <input
          className=" rounded-full sm:w-30 p-1 sm:p-2 md:p-2 bg-secondary-soft outline-none font-montserrat placeholder:text-secondary-dark text-secondary-dark"
          type="text"
          placeholder="Search Order"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchOrder;
