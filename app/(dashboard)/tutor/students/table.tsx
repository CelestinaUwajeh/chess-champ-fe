"use client";

import Image, { StaticImageData } from "next/image";
import DataTable, {
  TableColumn,
  TableStyles,
} from "react-data-table-component";

import img from "/public/student-place.png";
import { useFetchTutorStudents } from "@/services/swr/tutors";
import { useMemo } from "react";
import { StudentType } from "@/utils/types";

export const customStyles: TableStyles = {
  table: {
    style: {
      height: "fit-content",
      backgroundColor: "transparent",
    },
  },
  headRow: {
    style: {
      display: "flex",
      gap: "0.5rem",
    },
  },
  headCells: {
    style: {
      padding: "0",
      letterSpacing: "0.2px",
      fontSize: "14px",
    },
  },
  rows: {
    style: {
      display: "flex",
      gap: "0.5rem",
      padding: "12px",
      borderRadius: "10px",
      boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)",
    },
  },
  cells: {
    style: {
      padding: "0",
      letterSpacing: "0.2px",
      fontSize: "14px",
      minWidth: "unset",
      textTransform: "capitalize",
    },
  },
};

interface StudentTableType {
  img: string;
  name: string;
  username: string;
  class: string;
  progress: string;
}

const students = [
  {
    img,
    name: "Jane Doe",
    username: "Jane Doe",
    class: "Beginner",
    progress: "10%",
  },
  {
    img,
    name: "Jane Doe",
    username: "Jane Doe",
    class: "Beginner",
    progress: "10%",
  },
  {
    img,
    name: "Jane Doe",
    username: "Jane Doe",
    class: "Beginner",
    progress: "10%",
  },
  {
    img,
    name: "Jane Doe",
    username: "Jane Doe",
    class: "Beginner",
    progress: "10%",
  },
  {
    img,
    name: "Jane Doe",
    username: "Jane Doe",
    class: "Beginner",
    progress: "10%",
  },
];

const Table = () => {
  const { data } = useFetchTutorStudents<StudentType[]>();
  const reformedStudents = useMemo(() => {
    return (data || []).map(({ base_user, student_plans }) => ({
      name: base_user?.first_name || "",
      img: base_user?.profile_picture_url || "",
      progress: "10%",
      class: (student_plans?.pricing?.name as string) || "",
      username: base_user?.user_name || "",
    }));
  }, [data]);
  const columns: TableColumn<StudentTableType>[] = [
    {
      name: "",
      cell: (row) => (
        <div>
          <div className="w-[60] h-[60] rounded-full border-2 flex items-center justify-center overflow-hidden">
            <Image src={row.img} alt={row.name} />
          </div>
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Progress",
      selector: (row) => row.progress,
    },
  ];

  return (
    <div className="mr-12">
      <DataTable
        data={reformedStudents}
        columns={columns}
        customStyles={customStyles}
        pagination={false}
      />
    </div>
  );
};

export default Table;
