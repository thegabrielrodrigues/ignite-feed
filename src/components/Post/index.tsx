import { Avatar } from '@/components/Avatar';
import { Comment } from '@/components/Comment';

import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <div className={styles.post_top}>
        <div className={styles.post_author}>
          <Avatar src="https://github.com/rafaballerini.png" hasBorder={true} />
          <div className={styles.author_info}>
            <strong>Rafaela Ballerini</strong>
            <span>Dev Front-End</span>
          </div>
        </div>
        <time title="13 de Maio às 08:13" dateTime="2023-05-13 08:13:30">
          Publicado há 1h
        </time>
      </div>

      <div className={styles.post_content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="#">👉github.com/rafaballerini/doctorcare</a>
        </p>
        <p className={styles.hashtag_link}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <div className={styles.post_bottom}>
        <form className={styles.comment_form}>
          <div className={styles.leave_feedback}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário..." />
          </div>
          <div className={styles.publish_button}>
            <button type="submit">Publicar</button>
          </div>
        </form>

        <div className={styles.comment_list}>
          <Comment />
          <Comment />
        </div>
      </div>
    </article>
  );
}
