// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { removeProjectApi } from "../../services/projectService";
// import { toast } from "react-hot-toast";

// export default function useRemoveProject() {
//   const queryClient = useQueryClient();

//   const { mutate: removeProject, isPending: isDeleting } = useMutation({
//     mutationFn: removeProjectApi,
//     onSuccess: (data) => {
//       toast.success(data.message);

//       queryClient.invalidateQueries({
//         queryKey: ["owner-projects"],
//       });
//     },

//     onError: (err) => toast.error(err?.response?.data?.message),
//   });

//   return { removeProject, isDeleting };
// }

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"

function useRemoveProject() {
  const queryClient = useQueryClient

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log("====================================")
      console.log(data)
      console.log("====================================")
      toast.success("پروژه با موفقیت حذف شد")
      queryClient.invalidateQueries({
        queryKey: ["owner-projectts"],
      })
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message)
    },
  })

  return { removeProject, isDeleting }
}

export default useRemoveProject
