import styles from "./background.module.css";
import Image from "next/image";

const Background = () => {
  return (
    <div className={styles.background}>
      <Image
        src="/storm-raging.gif"
        layout="fill"
        alt="Background GIF"
        width={0}
        height={0}
      />
    </div>
  );
};

export default Background;
