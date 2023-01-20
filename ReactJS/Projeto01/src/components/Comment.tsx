import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface ICommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  const publishedAt = new Date()

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => { return state + 1 })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://randomuser.me/api/portraits/women/9.jpg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carolina Hadassa Almeida</strong>
              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateFormatted}</time>
            </div>

            <button className={styles.test} onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} tabIndex={-1}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
