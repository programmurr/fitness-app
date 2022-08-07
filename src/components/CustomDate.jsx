import styles from "../styles/custom-date.module.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { dateNow, timeNow } from "../recoil/atoms";
import createTime from "../lib/createTime";
export default function CustomDate() {
    const date = useRecoilValue(dateNow);
    const [time, setTime] = useRecoilState(timeNow);
    setInterval(() => {
        setTime(createTime());
    }, 1000);
    return (<div className={styles.customDateContainer}>
      <p className={styles.customDate}>{date}</p>
      <p className={styles.customTime}>{time}</p>
    </div>);
}
