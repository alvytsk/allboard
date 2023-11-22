'use client';

import styles from './CanvasToolbar.module.scss';

export function CanvasToolbar() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <button className={styles.tool}>Cursor</button>
        <button className={styles.tool}>Pencil</button>
        <button className={styles.tool}>Circle</button>
        <button className={styles.tool}>Eraser</button>
        <button className={styles.tool}>Square</button>
        <button className={styles.tool}></button>
      </div>
    </div>
  );
}
