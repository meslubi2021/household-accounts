import Link from 'next/link'
import styles from './page.module.scss';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (<>
    <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    <Link href="/dashboard">Dashboard</Link>
  </>
  );
}
