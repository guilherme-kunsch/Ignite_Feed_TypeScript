import { Sidebar } from "./components/Sidebar.tsx";
import { Header } from "./components/Header.tsx";
import { Post, PostType } from "./components/Post.tsx";
import "./global.css";
import styles from "./App.module.css";


const posts: PostType[] = [
  
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/75049024?v=4',
      name: 'Guilherme Künsch',
      role: 'Desenvolvedor Web'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ], 
    publishedAt: new Date('2024-01-13 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/66263035?v=4',
      name: 'Iconex Logística',
      role: 'Empresa'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ], 
    publishedAt: new Date('2024-01-09 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
