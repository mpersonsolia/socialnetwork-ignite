import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img src='https://github.com/mpersonsolia.png' />
					<div className={styles.authorInfo}>
						<strong>Maria Paula</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title='03 de Agosto às 08h26' dateTime='2022-08-11 08:26:12'>
					Publicado há 1 hora
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					👉<a href=''>jane.design/doctorcare</a>
				</p>
				<p>
					<a href=''>#novoprojeto</a> <a href=''>#nlw</a>{' '}
					<a href=''>#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Deixe um comentário' />
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>
		</article>
	);
}
