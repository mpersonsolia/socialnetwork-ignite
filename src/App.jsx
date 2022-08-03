import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

//posts para simular o back end
const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/mpersonsolia.png',
			name: 'Maria Paula',
			role: 'Web Developer @ Allìms',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-08-03 20:58:12'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/Rocketseat.png',
			name: 'Rocketseat',
			role: 'CEO @ Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-08-13 02:08:10'),
	},
	{
		id: 3,
		author: {
			avatarUrl: 'https://github.com/developerAllims.png',
			name: 'Allìms',
			role: 'CEO @ Allìms',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-08-18 20:01:12'),
	},
];

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
