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

import useUser from "../features/authentication/useUser"

function Header() {

  const { data } = useUser()
  console.log('====================================');
  console.log(data, 123456);
  console.log('====================================');

  return <div>
    <div className="bg-red-100 py-4 px-8 border-b border-secondary-200">
      <div className="container xl:max-w-screen-lg flex items-center justify-end"></div>
    </div>
  </div>
}

export default Header
