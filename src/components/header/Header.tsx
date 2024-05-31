import { NavLink } from "react-router-dom";
import cartIcon from "../../../public/cart.svg";
import { useState } from "react";
import CartModal from "../cartModal/CartModal";
const NavBar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const openCloseModal = () => {
    setShowModal(true);
  }
  return (
    <nav>
      <ul className="relative flex justify-evenly border border-s-black bg-black text-yellow-500">
        <li className="nav-item active hover:text-lg">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item active hover:text-lg">
          <NavLink className="nav-link" to="sample-components">
            Sample Components
          </NavLink>
        </li>

        <li className="nav-item active hover:text-lg">
          <NavLink className="nav-link" to="fetch-using-custom-hook">
            Fetch Data By CustomHook
          </NavLink>
        </li>

        <li>
          <button className="w-10 h-10 bg-white" onClick={openCloseModal}>
            <img src={cartIcon} alt="cart icon button" />{" "}
          </button>
        </li>
      </ul>
      {showModal && (<CartModal setShowModal={setShowModal} />)}
    </nav>
  );
};
const Header = () => {
  return <NavBar />;
};

export default Header;
