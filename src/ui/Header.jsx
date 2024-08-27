// import UserAvatar from "../features/authentication/UserAvatar";
// import useUser from "../features/authentication/useUser";
// import HeaderMenu from "./HeaderMenu";

// function Header() {
//   const { isLoading } = useUser();

//   return (
//     <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
//       <div
//         className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
//       ${isLoading ? "blur-sm opacity-50" : ""}
//       `}
//       >
//         <UserAvatar />
//         <HeaderMenu />
//       </div>
//     </div>
//   );
// }
// export default Header;

import UserAvatar from "../features/authentication/UserAvatar"
import useUser from "../features/authentication/useUser"
import HeaderMenu from "./HeaderMenu"

function Header() {
  const { isLoading, user } = useUser()

  return (
    <div>
      <div className="bg-red-100 py-4 px-8 border-b border-secondary-200">
        <div
          className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${!isLoading ? "blure-sm opacity-50" : ""}`}
        >
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
