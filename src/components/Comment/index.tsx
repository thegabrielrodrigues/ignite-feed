import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '@/components/Avatar';
import { CommentDTO } from '@/dtos/CommentDTO';

import styles from './styles.module.css';

interface CommentProps {
  commentData: CommentDTO;
  onRemove: (commentPostDate: string) => void;
  onLikeComment: (commentPostDate: string) => void;
}

export function Comment({ commentData, onRemove, onLikeComment }: CommentProps) {
  const { content, publishedAt, likeCount } = commentData;

  const publicationDate = {
    formattedPublicationDate: format(publishedAt, "dd' de 'MMMM' às 'HH:mm", { locale: ptBR }),
    publicationDateRelativeToNow: formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/thegabrielrodrigues.png" />

      <div className={styles.comment_column}>
        <div className={styles.comment_box}>
          <div className={styles.comment_box_top}>
            <div className={styles.author_and_time}>
              <strong>Gabriel Rodrigues</strong>
              <time title={publicationDate.formattedPublicationDate} dateTime={publishedAt.toISOString()}>
                {publicationDate.publicationDateRelativeToNow}
              </time>
            </div>
            <button
              className={styles.trash_button}
              onClick={() => onRemove(new Date(publishedAt).toISOString())}
              title="Remover comentário"
            >
              <Trash size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>{content}</div>
        </div>

        <div className={styles.like_button}>
          <button onClick={() => onLikeComment(new Date(publishedAt).toISOString())}>
            <ThumbsUp size={24} />
            Curtir
          </button>
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
