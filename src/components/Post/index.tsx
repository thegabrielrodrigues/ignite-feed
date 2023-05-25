import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Swal from 'sweetalert2';

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

  const isNewCommentEmpty = newTextComment.length === 0;
  const publicationDate = {
    formattedPublicationDate: format(publishedAt, "dd' de 'MMMM' às 'HH:mm", { locale: ptBR }),
    publicationDateRelativeToNow: formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
  };

  class Form {
    handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity('');

      setNewTextComment(e.target.value);
    }

    handleNewInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity('Preencha este campo por favor!');
    }
  }

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    const commentData: CommentDTO = {
      content: newTextComment,
      publishedAt: new Date(),
      likeCount: 0,
    };

    setComments([commentData, ...comments]);
    setNewTextComment('');
  }

  function handleDeleteComment(commentPostDate: string) {
    Swal.fire({
      title: 'Excluir comentário',
      text: 'Você tem certeza que gostaria de excluir este comentário?',
      icon: 'question',
      confirmButtonText: 'Sim, excluir',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      focusDeny: true,
      reverseButtons: true,
      background: 'var(--gray-800)',
      color: 'var(--gray-300)',
      customClass: {
        confirmButton: 'swal2ConfirmButton',
        denyButton: 'swal2DenyButton',
      },
    }).then((response) => {
      if (response.isConfirmed) {
        setComments(comments.filter((comment) => new Date(comment.publishedAt).toISOString() !== commentPostDate));

        Swal.fire({
          title: 'O seu comentário foi excluído com sucesso',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: 'var(--gray-800)',
          color: 'var(--gray-300)',
        });
      } else if (response.isDenied) {
        Swal.fire({
          title: 'Operação cancelada pelo usuário',
          text: 'O seu comentário não foi excluído',
          icon: 'info',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: 'var(--gray-800)',
          color: 'var(--gray-300)',
        });
      }
    });
  }

  function handleLikeComment(commentPostDate: string) {
    comments.reduce((prev, curr) => {
      if (new Date(curr.publishedAt).toISOString() === commentPostDate) {
        curr.likeCount = curr.likeCount + 1;
      }

      return prev;
    }, []);

    setComments([...comments]);
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
            <textarea
              onChange={new Form().handleNewCommentChange}
              onInvalid={new Form().handleNewInvalidComment}
              placeholder="Deixe um comentário..."
              required={true}
              value={newTextComment}
            />
          </div>
          <div className={styles.publish_button}>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </div>
        </form>

        <div className={comments.length && styles.comment_list}>
          {comments.map((comment, index) => (
            <Comment key={index} commentData={comment} onRemove={handleDeleteComment} onLikeComment={handleLikeComment} />
          ))}
        </div>
      </div>
    </article>
  );
}
