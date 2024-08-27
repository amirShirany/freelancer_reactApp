// import Empty from "../../ui/Empty";
// import Table from "../../ui/Table";
// import ProposalRow from "./ProposalRow";


// function ProposalsTable({ proposals }) {
//   if (!proposals.length) return <Empty resourceName="درخواستی" />;

//   return (
//     <Table>
//       <Table.Header>
//         <th>#</th>
//         <th>فریلنسر</th>
//         <th>توضیحات</th>
//         <th>زمان تحویل</th>
//         <th>هزینه</th>
//         <th>وضعیت</th>
//         <th>عملیات</th>
//       </Table.Header>
//       <Table.Body>
//         {proposals.map((proposal, index) => (
//           <ProposalRow key={proposal._id} proposal={proposal} index={index} />
//         ))}
//       </Table.Body>
//     </Table>
//   );
// }
// export default ProposalsTable;

import useOwnerProjects from "../projects/useOwnerProjects"
import Loading from "../../ui/Loading"
import Empty from "../../ui/Empty"
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort"


function ProposalsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />

  if (!projects.length > 0) return <Empty resourceName="پروژه وجود ندارد" />

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <thead>
        <tr className="title-row">
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (<tr key={project._key}>
          <td>{index + 1}</td>
          <td>{truncateText(project.title, 30)}</td>
          <td>{project.category.title}</td>
          <td>{project.budget}</td>
          <td>{toLocalDateShort(project.deadline)}</td>
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            <td>{project.tags.map((tag) => (<span className="badge badge--secondary" key={tag}>{tag}</span>))}</td>
          </div>
          <td>{project.freelancer?.name || "-"}</td>
          <td>
            {project.status === "OPEN" ? (<span className="badge badge--success">باز</span>) : (<span className="badge badge--danger">بسته</span>)}
          </td>
        </tr>))}
      </tbody>
    </div>
  )
}

export default ProposalsTable