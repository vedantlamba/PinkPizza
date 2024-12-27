import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurent";
import Header from "../../Ui/Header";
import CartOverview from "../Cart/CartOverview";
import MenuItem from "./MenuItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";


const CustomPrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    <span className="text-white">Previous</span>{" "}
    {/* You can customize the text or icon */}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    <span className="text-white">Next</span> {/* Customize the text or icon */}
  </button>
);

function Menu() {
  const Menu = useLoaderData();
  const menuData = Menu.data;
  // console.log(menuData)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "130px",
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "0px", // No padding for center mode
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          centerPadding: "1px",
          
        },
      },
      {
        breakpoint: 640, // Tailwind's `sm` breakpoint (640px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px", // Add spacing for better layout
          dots: false,
          arrows: false
          
        },
      },
    ],
  };

  return (
    <div className="flex h-screen bg-secondary-meduim w-screen items-center flex-col justify-between px-4 sm:px-8">
      <Header />
      <h1 className="font-montserrat text-center font-light text-secondary-dark text-3xl sm:text-6xl mb-4 sm:mb-6">
        Menu
      </h1>

      <div className="w-full px-2 slider-container">
        <Slider {...settings}>
          {menuData.map((pizza) => (
            <div key={pizza.id} className="px-2 sm:px-4">
              <MenuItem pizza={pizza} />
            </div>
          ))}
        </Slider>
      </div>

      <CartOverview />
    </div>
  );
}

export async function loader() {
  const Menu = await getMenu();
  return Menu;
}

export default Menu;
