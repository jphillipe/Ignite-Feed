import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Comment } from './components/Comment';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/jphillipe.png',
      name: 'João Phillipe Fernandes',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jp.design/doctorcare'},    
    ],
    publishedAt: new Date('2022-05-24 21:00:00')
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/glsvitoria.png',
      name: 'Guilherme Vitória',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jp.design/doctorcare'},    
    ],
    publishedAt: new Date('2022-05-27 19:00:00')
  },
];



export function App() {
  return (
    <div>
    
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          
          {posts.map(post =>{
            return( 
              <Post
                author = {post.author }
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}

        </main>
      </div>

    </div>
    
  )
}


