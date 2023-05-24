import { FormEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '@/components/Avatar';
import { Comment } from '@/components/Comment';
import { CommentDTO } from '@/dtos/CommentDTO';
import { PostDTO } from '@/dtos/PostDTO';

import styles from './styles.module.css';

interface PostProps {
  postData: PostDTO;
}

export function Post({ postData }: PostProps) {
  const [comments, setComments] = useState<CommentDTO[]>([]);
  const [newTextComment, setNewTextComment] = useState<string>('');

  const { author, content, publishedAt } = postData;

  const publicationDate = {
    formattedPublicationDate: format(publishedAt, "dd' de 'MMMM' às 'HH:mm", { locale: ptBR }),
    publicationDateRelativeToNow: formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
  };

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    const commentData: CommentDTO = {
      content: newTextComment,
      publishedAt: new Date(),
    };

    setComments([commentData, ...comments]);
    setNewTextComment('');
  }

  return (
    <article className={styles.post}>
      <div className={styles.post_top}>
        <div className={styles.post_author}>
          <Avatar src={author.avatarURL} hasBorder={true} />
          <div className={styles.author_info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publicationDate.formattedPublicationDate} dateTime={publishedAt.toISOString()}>
          {publicationDate.publicationDateRelativeToNow}
        </time>
      </div>

      <div className={styles.post_content}>
        {content.map((line, index) => {
          switch (line.type) {
            case 'paragraph':
              return <p key={index}>{line.content}</p>;
            case 'link':
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              );
            case 'hashtags':
              return (
                <p key={index} className={styles.hashtag_link}>
                  {line.content.map((hashtag, index) => (
                    <a key={index} href="#">
                      {hashtag}
                    </a>
                  ))}
                </p>
              );
          }
        })}
      </div>

      <div className={styles.post_bottom}>
        <form className={styles.comment_form} onSubmit={handleCreateNewComment}>
          <div className={styles.leave_feedback}>
            <strong>Deixe seu feedback</strong>
            <textarea onChange={(e) => setNewTextComment(e.target.value)} placeholder="Deixe um comentário..." value={newTextComment} />
          </div>
          <div className={styles.publish_button}>
            <button type="submit">Publicar</button>
          </div>
        </form>

        <div className={comments.length && styles.comment_list}>
          {comments.map((comment, index) => (
            <Comment key={index} commentData={comment} />
          ))}
        </div>
      </div>
    </article>
  );
}
