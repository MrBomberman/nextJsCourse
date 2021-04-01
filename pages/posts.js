import MainLayout from '../components/MainLayout'
import {useState, useEffect} from 'react';
import Link from 'next/link';
// http://localhost:3000/posts
export default function Posts({posts}) { // передаем наши посты, полученные из статического метода
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   async function load(){
  //     const response = await fetch('http://localhost:4200/posts')
  //     const json = await response.json(); // парсим в объект наш ответ от сервера

  //     setPosts(json); // просто передаем набор новых постов в наш массив


  //   }
  //   load(); // вызываем наш фетч
  // }, [])
  // получаем все посты и перебираем их, формируя отдельную ссылку на каждый пост
    return (
        <MainLayout title={"Posts page"}>


          <h1>POSTS PAGE</h1> 

          <ul>
            {posts.map(post => (
              <li key={post.id}> 
                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                  <a>{post.title}</a></Link>
              </li>
            ))}
          </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async() => { // обращаемся к нашей функции и определяем ее статический метод, который будет выполняться на сервере
  const response = await fetch('http://localhost:4200/posts'); // делаем запрос на сервер
  const posts = await response.json(); // парсим в объект наш ответ от сервера


  return { // возвращаем объект для обработки на фронтенде
    posts 
  }

}

// /post/43