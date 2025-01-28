import styles from "./Square.module.css";

export default function Square({ value, onClick }) {
  return (
    <>
      <button className={styles.square} onClick={onClick}>
        {value}
      </button>
    </>
  );
}
