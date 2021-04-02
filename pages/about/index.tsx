// http://localhost:3000/about/about
// http://localhost:3000/about - если имя файла index.js
// начальная странице в роутинге about
import Router from 'next/router'; // расширяет функционал использования роутинга
import MainLayout from '../../components/MainLayout';


export default function About({title}) {

    const linkHandler = () => {
        Router.push('/posts') // помогает взаимодействовать с роутингом страницы
    }

    return (
        <MainLayout title={"About page"}>
            <h1>{title}</h1>

            <button onClick={linkHandler}>Go to posts </button>
            <button onClick={() => Router.push('/')}>Go back to home inline</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title
    }
}