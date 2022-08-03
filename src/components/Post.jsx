import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author }) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title='03 de Agosto às 08h26' dateTime='2022-08-11 08:26:12'>
					Publicado há 1 hora
				</time>
			</header>

			<div className={styles.content}></div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Deixe um comentário' />
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
