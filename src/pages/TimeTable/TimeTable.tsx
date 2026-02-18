import { useSelector } from "react-redux";
import "./style.scss";
import moment from "moment";
import { RootState } from "../../shared/store";

export interface Props {}

export default function TimeTable() {
  const records: Array<any> = useSelector(
    (state: RootState) => state.ramadanTimeTable
  );

  const isToday = (date: string): boolean => {
    return moment(new Date(date)).isSame(moment(), 'day');
  };

  return (
    <div id="time-table-page">
      <div className="page-container">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Weekday</th>
              <th>Sehri</th>
              <th>Iftar</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record: any, index: number) => {
              return (
                <tr
                  key={index}
                  className={isToday(record.date) ? "active" : "inactive"}
                >
                  <td>{record.day}</td>
                  <td>{record.date}</td>
                  <td>{record.weekday}</td>
                  <td>{record.sehri}</td>
                  <td>{record.iftar}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
