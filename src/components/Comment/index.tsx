import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from '@/components/Avatar';
import { CommentDTO } from '@/dtos/CommentDTO';

import styles from './styles.module.css';

interface CommentProps {
  commentData: CommentDTO;
}

export function Comment({ commentData }: CommentProps) {
  const { content } = commentData;

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/thegabrielrodrigues.png" />

      <div className={styles.comment_column}>
        <div className={styles.comment_box}>
          <div className={styles.comment_box_top}>
            <div className={styles.author_and_time}>
              <strong>Gabriel Rodrigues</strong>
              <time title="13 de Maio às 14:28" dateTime="2023-05-13 14:28:46">
                Há 2 horas atrás
              </time>
            </div>
            <button className={styles.trash_button}>
              <Trash size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>{content}</div>
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
