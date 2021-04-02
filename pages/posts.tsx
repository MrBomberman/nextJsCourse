import MainLayout from '../components/MainLayout'
import {useState, useEffect} from 'react';
import Link from 'next/link';
import { MyPost } from '../interfaces/post';
import { NextPageContext } from 'next';
// http://localhost:3000/posts

interface PostPageProps{ // интерфейс для входящих свойств
  posts: MyPost[] // интерфейс постов
}

// дает нам ряд преимуществ - какие поля етсть у наших постов, 
export default function Posts({posts: serverPost} : PostPageProps) { // передаем наши посты, полученные из статического метода
    const [posts, setPosts] = useState(serverPost)

    useEffect(() => {
      async function load(){
        const response = await fetch(`${process.env.API_URL}/posts`)
        const json = await response.json(); // парсим в объект наш ответ от сервера

        setPosts(json); // просто передаем набор новых постов в наш массив


      }
      if(!serverPost){ // если ничего не пришло, снова обращаемся, но уже на фронтенде
        load(); // вызываем наш фетч
      }
    }, [])


    if(!posts){ // если пост получен, но еще не загружен
      return (
      <MainLayout>
          <p>Loading.....</p>
      </MainLayout>
      )
  }

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

Posts.getInitialProps = async({req}: NextPageContext) => { // обращаемся к нашей функции и определяем ее статический метод, который будет выполняться на сервере
  const response = await fetch(`${process.env.API_URL}/posts`); // делаем запрос на сервер
  const posts: MyPost[] = await response.json(); // парсим в объект наш ответ от сервера

  if(!req){ // если не было запроса, вернем ноль
    return {posts: null}
  }

  return { // возвращаем объект для обработки на фронтенде
    posts 
  }

}

// /post/43