import React, { useEffect, useRef, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
  { path: "/hotel", display: "Hotels" },
  { path: "/flight", display: "Flight" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [ishover, sethover] = useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(
          "bg-blue",
          "shadow-lg",
          "bg-opacity-90",
          "backdrop-blur-md"
        );
      } else {
        headerRef.current.classList.remove(
          "bg-blue",
          "shadow-lg",
          "bg-opacity-90",
          "backdrop-blur-md"
        );
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  };

  useEffect(() => {
    stickyHeaderFunc();
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("hidden");

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 bg-[#500042] transition-shadow duration-300 py-3"
    >
      <Container>
        <Row>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img src={Logo} alt="Logo" className="h-11 rounded-2xl" />
            </div>

            <div className="relative lg:flex hidden h-8" ref={menuRef}>
              <ul className="flex space-x-6">
                {nav__links.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xl text-decoration-none ${
                          isActive
                            ? "font-bold border-b-4 text-[white]"
                            : "text-[white]"
                        } hover:text-[white] hover:border-b-4 hover:border-[white]`
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                className="absolute right-0 top-0 lg:hidden p-2"
                onClick={toggleMenu}
              >
                <i className="ri-menu-line text-2xl"></i>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {user ? (
                  <>
                    <h5
                      onMouseOver={() => sethover(true)}
                      onMouseLeave={() => sethover(false)}
                      className="mb-0 text-white border-white border-2 rounded-3xl p-2 w-10 h-10 flex items-center justify-center absolute right-10"
                    >
                      {user.username.charAt(0)}
                    </h5>
                    
                    {ishover && (
                      <div
                        onMouseOver={() => sethover(true)}
                        onMouseLeave={() => sethover(false)}
                        className="absolute right-14 top-14 bg-[#500042] backdrop-blur-sm p-4 rounded-lg shadow-lg"
                      >
                        <div className="flex flex-col items-start space-y-2">
                          <p className="text-[#E6E6E6] text-sm">{user.email}</p>
                          <Button
                            className="w-full bg-[#8E3E63] text-white hover:bg-[#5D0E41] text-sm font-bold transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-md rounded-md"
                          >
                            <Link
                              to="/bookedflights"
                              className="text-white text-decoration-none font-bold"
                            >
                              Flight Bookings
                            </Link>
                          </Button>
                          <Button
                            className="w-full bg-[#8E3E63] text-white hover:bg-[#5D0E41] text-sm font-bold transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-md rounded-md"
                          >
                            <Link
                              to="/bookedtours"
                              className="text-white text-decoration-none font-bold"
                            >
                              Tour Bookings
                            </Link>
                          </Button>
                          <Button
                            className="w-full bg-[#8E3E63] text-white hover:bg-[#5D0E41] text-sm font-bold transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-md rounded-md"
                          >
                            <Link
                              to="/bookedhotels"
                              className="text-white text-decoration-none font-bold"
                            >
                              Hotel Bookings
                            </Link>
                          </Button>
                          <Button
                            className="w-full bg-[#8E3E63] text-white hover:bg-[#5D0E41] text-sm font-bold transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-md rounded-md"
                            onClick={logout}
                          >
                            <span className="text-white text-decoration-none font-bold">
                              LogOut
                            </span>
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Button className="mx-14 w-20 bg-white text-[#5D0E41] hover:bg-[#e02e4e] absolute right-0">
                    <Link
                      to="/login"
                      className="text-[#5D0E41] text-decoration-none font-bold"
                    >
                      Login
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
