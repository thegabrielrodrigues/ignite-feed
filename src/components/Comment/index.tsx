import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from '@/components/Avatar';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" />

      <div className={styles.comment_column}>
        <div className={styles.comment_box}>
          <div className={styles.comment_box_top}>
            <div className={styles.author_and_time}>
              <strong>Diego Fernandes</strong>
              <time title="13 de Maio às 14:28" dateTime="2023-05-13 14:28:46">
                Há 2 horas atrás
              </time>
            </div>
            <button className={styles.trash_button}>
              <Trash size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto fuga tenetur similique vitae dolor consectetur a,
            dolorum saepe! Eligendi assumenda non ullam rem accusamus asperiores corrupti ipsa est quod!
          </div>
        </div>

        <div className={styles.like_button}>
          <button>
            <ThumbsUp size={24} />
            Aplaudir
          </button>
          <span>03</span>
        </div>
      </div>
    </div>
  );
}
