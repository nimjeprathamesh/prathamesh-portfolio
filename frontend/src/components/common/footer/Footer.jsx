import logo from "../../../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { navItems } from "../../../utils/constants.jsx";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <ScrollLink
          to="introduction"
          smooth={true}
          duration={900}
          className="flex items-center border-0 cursor-pointer"
        >
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Prathamesh
          </p>
        </ScrollLink>

        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) =>
            item.url.startsWith("/") ? (
              <RouterLink
                key={item.id}
                target="_blank"
                to={item.url.toLowerCase()}
                smooth={true}
                duration={1000}
                offset={-140}
                className={`mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer ${location.pathname === item.url ? "text-white font-semibold" : ""}`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
              </RouterLink>
            ) : (
              <ScrollLink
                onClick={handleMenuClick}
                key={item.id}
                to={item.url.toLowerCase()}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-140}
                activeStyle={{ color: "#FFF", fontWeight: "bold" }}
                className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
              </ScrollLink>
            )
          )}
        </div>

        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear}.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed ❤️ by{" "}
        <a className="font-bold" target="_blank" rel="noopener noreferrer">
          me
        </a>
      </p>
    </div>
  );
};

export default Footer;
