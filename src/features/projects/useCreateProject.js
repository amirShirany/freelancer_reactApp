import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProjectApi } from "../../services/projectService"
import { toast } from "react-hot-toast"

export default function useCreateProject() {
  const queryClient = useQueryClient

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
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

  return { isCreating, createProject }
}
