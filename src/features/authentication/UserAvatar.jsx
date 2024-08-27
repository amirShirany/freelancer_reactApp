// import useUser from "./useUser";

// function UserAvatar() {
//   const { user } = useUser();
//   return (
//     <div className="flex items-center gap-x-2 text-secondary-600">
//       <img
//         className="w-7 h-7 rounded-full object-cover object-center"
//         src="/user.jpg"
//         alt="user-account"
//       />
//       <span>{user?.name}</span>
//     </div>
//   );
// }
// export default UserAvatar;
import useUser from "./useUser"

function UserAvatar() {
  const { isLoading, user } = useUser
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center gap-x-8"
        src="user.jpg"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  )
}

export default UserAvatar
