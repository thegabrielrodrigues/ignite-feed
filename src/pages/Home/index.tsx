import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { Sidebar } from '@/components/Sidebar';
import { posts } from '@/data/db';

import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
