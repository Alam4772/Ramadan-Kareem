import { useSelector } from "react-redux";
import "./style.scss";
import { RootState } from "../../shared/store";
import { useEffect, useState } from "react";
import moment from "moment";
// import useSehriIftarNotifications from "../../hooks/useSehriIftarNotifications";

export default function RamadanContent() {
  // const { setCurrent: setNow } = useSehriIftarNotifications();

  const records: Array<any> = useSelector(
    (state: RootState) => state.ramadanTimeTable
  );

  const [current, setCurrent] = useState<any>();

  useEffect(() => {
    const record = records.find((record: any) => {
      return moment(new Date(record.date)).isSame(moment(), "day");
    });

    setCurrent(record);
    // setNow(record);
  }, [records]);

  return (
    <>
      {current && (
        <div id="ramadan-content">
          <div className="sehri">
            <h3>Sehri</h3>
            <h3>{current?.sehri ?? ""}</h3>
          </div>
          <div className="iftar">
            <h3>Iftar</h3>
            <h3>{current?.iftar ?? ""}</h3>
          </div>
        </div>
      )}
    </>
  );
}
