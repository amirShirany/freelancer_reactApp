// function Sidebar({ children }) {
//   return (
//     <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4">
//       <ul className="flex flex-col gap-y-4">{children}</ul>
//     </div>
//   );
// }
// export default Sidebar;

import { HiCollection, HiHome } from "react-icons/hi"
import { NavLink } from "react-router-dom"

function Sidebar() {
  const liStyle =
    "flex items-center gap-x-2 hover:bg-primary-100 hover:text-primary-900 px-2 py-1.5 rounded-md transition-all duration-300"

  return (
    <div>
      <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200">
        <ul className="flex flex-col gap-y-4">
          <li>
            <NavLink
              to={"owner/dashbord"}
              className={({ isActive }) => {
                isActive
                  ? `${liStyle} bg-primary-100/50 text-primary-900`
                  : `${liStyle} text-secondary-600`
              }}
            >
              <HiHome />
              <span>خانه</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"owner/projects"} className={liStyle}>
              <HiCollection />
              <span>پروژه ها</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
