// import { HiOutlineUser } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";
// import Logout from "../features/authentication/Logout";

// function HeaderMenu() {
//   return (
//     <ul className="flex gap-x-4 items-center">
//       <li className="flex">
//         <Link to="dashboard">
//           <HiOutlineUser className="w-5 h-5 text-primary-900" />
//         </Link>
//       </li>
//       <li className="flex">
//         <DarkModeToggle />
//       </li>
//       <li className="flex">
//         <Logout />
//       </li>
//     </ul>
//   );
// }
// export default HeaderMenu;

import { HiOutlineUser } from "react-icons/hi"
import DarkModeToggle from "./DarkModeToggle"
import Logout from "../features/authentication/Logout"

function HeaderMenu() {
  return (
    <div>
      <ul className="flex gap-x-4 items-center">
        <li>
          <link to="dashbord">
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenu
