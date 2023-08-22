"use client";

import DataTable, {
  TableColumn,
  TableStyles,
} from "react-data-table-component";

import { Button } from "@/components/ui/button";

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
      padding: "12px",
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

interface PaymentType {
  date: string;
  amount: number;
  description: string;
  status: "paid" | "unpaid";
  class: string;
}

const students: PaymentType[] = [
  {
    date: "24/12/2022",
    amount: 15000,
    description: "A description",
    status: "paid",
    class: "Beginner",
  },
  {
    date: "24/12/2022",
    amount: 15000,
    description: "A description",
    status: "paid",
    class: "Beginner",
  },
  {
    date: "24/12/2022",
    amount: 15000,
    description: "A description",
    status: "paid",
    class: "Beginner",
  },
  {
    date: "24/12/2022",
    amount: 15000,
    description: "A description",
    status: "paid",
    class: "Beginner",
  },
  {
    date: "24/12/2022",
    amount: 15000,
    description: "A description",
    status: "paid",
    class: "Beginner",
  },
];

const Table = () => {
  const columns: TableColumn<PaymentType>[] = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      cell: (row) => {
        return (
          <Button className="bg-bgPink text-main w-[85px] h-10 text-xs">
            Paid
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <DataTable
        data={students}
        columns={columns}
        customStyles={customStyles}
        pagination={false}
      />
    </div>
  );
};

export default Table;
