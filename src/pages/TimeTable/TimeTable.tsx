import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import moment from "moment";
import { RootState } from "../../shared/store";
import { useCallback } from "react";

export interface Props {}

export default function TimeTable() {
  const records: Array<any> = useSelector(
    (state: RootState) => state.ramadanTimeTable,
  );

  const isToday = useCallback((date: string): boolean => {
    return moment(date).isSame(moment(), "day");
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <table className={styles.table}>
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
                  className={
                    isToday(record.date) ? styles.active : styles.inactive
                  }
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
