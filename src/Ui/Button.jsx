import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

function Button({onClick,buttonType, children, disabled, to, type, px, py,my = 2 ,mx = 2 }) {
  const styles = {
    primary: `flex justify-center items-center border-2 mx-${mx} my-${my} sm:text-sm font-montserrat border-secondary-dark bg-secondary-dark px-${px} py-${py} rounded-full`,
  };

  if (to)
    return (
      <Link to={to} type={buttonType} onClick={onClick} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} type={buttonType} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
