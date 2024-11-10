import { FaCalendarAlt, FaFemale, FaHome, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { FaBars, FaBook, FaCalendar, FaCalendarCheck, FaEnvelope, FaHouse, FaListUl, FaRankingStar, FaSpoon, FaToggleOn, FaUser, FaUsers, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

    const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu ">
          {
            isAdmin ? <>

          <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaListUl></FaListUl>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook>
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          


            </>
            :
            <>

          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt></FaCalendarAlt>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet>
              RealPayment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaRankingStar></FaRankingStar>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaCalendarCheck></FaCalendarCheck>
              My Booking
            </NavLink>
          </li>

            </>
          }
          {/* shared nav */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBars></FaBars>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
