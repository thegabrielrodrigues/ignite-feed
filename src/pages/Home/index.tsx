import { Sidebar } from '@/components/Sidebar';

import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas fugit tempore neque, inventore aperiam hic iure placeat
          perspiciatis reprehenderit enim veritatis harum ducimus repellendus porro totam voluptatibus pariatur sunt!
        </main>
      </div>
    </div>
  );
}
