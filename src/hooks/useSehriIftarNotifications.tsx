import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { show } from "../shared/store/notificationSlice";

const useSehriIftarNotifications = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<any>();

  useEffect(() => {
    if (!current) return;

    const checkNotifications = () => {
      const now = moment();

      const sehriTimeEnd = moment(current?.sehri, "hh:mm A");
      const sehriTimeDiff = now.diff(sehriTimeEnd, "minutes");

      const iftarTimeEnd = moment(current?.iftar, "hh:mm A");
      const iftarTimeDiff = now.diff(iftarTimeEnd, "minutes");

      // Sehri Notifications
      if (sehriTimeDiff === -15) {
        dispatch(
          show({
            title: `🌙 Start Your Fast with Barakah`,
            text: `Time to have your Sehri! May Allah grant you strength and blessings throughout the day.`,
          })
        );
      }

      if (sehriTimeDiff === -5) {
        dispatch(
          show({
            title: `🕋 Sehri Time is Ending!`,
            text: `The window for Sehri is closing soon. Eat and prepare for a day of fasting.`,
          })
        );
      }

      // Iftar Notifications
      if (iftarTimeDiff === 0) {
        dispatch(
          show({
            title: `🌅 Iftar Time!`,
            text: `Alhamdulillah! It’s time to break your fast. May Allah accept your fast and prayers.`,
          })
        );
      }

      if (iftarTimeDiff === 10) {
        dispatch(
          show({
            title: `🌟 Iftar Mubarak!`,
            text: `The fast is over for today. May your prayers and devotion be rewarded abundantly.`,
          })
        );
      }
    };

    // Run check immediately and set interval to run every minute
    checkNotifications();
    const interval = setInterval(checkNotifications, 60000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [current, dispatch]);

  return { setCurrent };
};

export default useSehriIftarNotifications;
