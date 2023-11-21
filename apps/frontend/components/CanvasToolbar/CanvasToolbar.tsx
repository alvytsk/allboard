import styles from './CanvasToolbar.module.scss';

export function CanvasToolbar() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <button className={styles.tool}>Button 1</button>
          <button className={styles.tool}>Button 2</button>
          <button className={styles.tool}>Button 3</button>
        </div>
        <div className={styles.column}>
          <button className={styles.tool}>Button 4</button>
          <button className={styles.tool}>Button 5</button>
          <button className={styles.tool}>Button 6</button>
        </div>
      </div>
    </div>
  );
}
