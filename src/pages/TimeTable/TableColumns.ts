import { ColumnsType } from "antd/es/table";
import { RamadanData } from "../../shared/interface/RamadanData";

export const columns: ColumnsType<RamadanData> = [
  {
    title: "DAY",
    dataIndex: "day",
    width: 100,
  },
  {
    title: "DATE",
    dataIndex: "date",
    width: 200,
  },
  {
    title: "WEEKDAY",
    dataIndex: "weekday",
    width: 200,
  },
  {
    title: "SEHRI",
    dataIndex: "sehri",
    width: 150,
  },
  {
    title: "IFTAR",
    dataIndex: "iftar",
    width: 150,
  },
];
