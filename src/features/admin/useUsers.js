// import { useQuery } from "@tanstack/react-query";
// import { getUsersApi } from "../../services/authService";

// export default function useUsers() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: getUsersApi,
//   });

//   const { users } = data || {};

//   return { isLoading, users };
// }

import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../services/authService"

export default function useUser() {
  return useQuery({
    queryKey: ["get-user"], // کلید
    queryFn: getUser, // function in cervices
    retry: false, // تلاش مجدد بعد از درخواست
    // (refetchInterval) ریکوست در بازه های مختلف
    // refetchOnReconnect اتصال مجدد و گرفتن دیتا بعد از کانکن مجدد
  })
}
