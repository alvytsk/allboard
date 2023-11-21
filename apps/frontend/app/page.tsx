import { CanvasBoard } from '../components/CanvasBoard';
import { CanvasToolbar } from '../components/CanvasToolbar';
import styles from './page.module.scss';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <CanvasToolbar />
      <CanvasBoard />
    </>
  );
}
