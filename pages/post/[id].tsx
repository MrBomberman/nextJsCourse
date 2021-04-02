// назвывая файл с [] скобками мы говорим нексту, что здесь у нас будет в этом файле динамика
import Link from 'next/link';
 import {useRouter} from 'next/router'; // для синхронизации серверных и клиентских параметров
import MainLayout from '../../components/MainLayout';
import {useState, useEffect} from 'react';
import { NextPageContext } from 'next';
import { MyPost } from '../../interfaces/post';

interface PostPageProps {
    post: MyPost
}


// по адресу /post/любая цифра
export default function Post({post: serverPost}: PostPageProps) {



    const [post, setPost] = useState(serverPost)
    const router = useRouter();

    useEffect(() => {
             
        async function load(){ // будем вызывать в том случае, если сервер нам ничего не вернул - загрузка на фронтенде
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`); // обращаемся еще раз к id, но уже на фронтенде, если при первой загрузке сервер нам ничего не вернул
            const data = await response.json(); // парсим в объект наш ответ от сервера    
            setPost(data)   
        
        }

        if(!serverPost){ // будем вызывать в том случае, если сервер нам ничего не вернул - загрузка на фронтенде
            load();
        }

    }, [] )// запускаем при майнте самого компонента

    if(!post){ // если пост получен, но еще не загружен
        return (
        <MainLayout>
            <p>Loading.....</p>
        </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href='/posts'><a>Back to Posts</a></Link>
        </MainLayout>

    )
}


interface PostNextPageContext extends NextPageContext{
    query: {
        id: string
    }
}

// getInitialProps первый раз выполняется на сервере
Post.getInitialProps = async({query, req}: PostNextPageContext) => { // обращаемся к нашей функции и определяем ее статический метод, который будет выполняться на сервере
    // функция принимает контекст текущий
    
    if(!req) {
        return {post: null}
    }

    // console.log(ctx.query) // Раздел строки запроса URL-адреса, анализируемый как объект - чтобы венрнуть текущий id
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`); // делаем запрос на сервер
    const post: MyPost = await response.json(); // парсим в объект наш ответ от сервера
  
  
    return { // возвращаем объект для обработки на фронтенде
      post 
    }
  

  
  }
// getServerSideProps - всегда вызывается только на серверной части
// export async function getServerSideProps({query, req}){

//     if(!req) {
//         return {post: null}
//         }

//     // console.log(ctx.query) // Раздел строки запроса URL-адреса, анализируемый как объект - чтобы венрнуть текущий id
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`); // делаем запрос на сервер
//     const post = await response.json(); // парсим в объект наш ответ от сервера
  
  
//     return { // возвращаем объект для обработки на фронтенде
//       props: post 
//     }

// }