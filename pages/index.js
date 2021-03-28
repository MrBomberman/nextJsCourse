// необходимо написать какой-нибудь реакт компонент
// ы не импортируем реакт, так как мы работаем в некст джс
// мы создаем роутинг через файловую систему - обязательно название index.js файла, потому что некст на нашей главной странице по умолчанию будет смотреть на индекс джс
// http://localhost:3000/
// для создание другой страницы необходимо просто создать еще один файл
// название url адреса совпадает с названием файла
import Link from 'next/link'; // помогает использовать переход на страницы без полной перезагрузки
import Head from 'next/head'; // можем указывать внутри этого компонента теги, которые характерны для данной страницы
import MainLayout from '../components/MainLayout';

export default function Index() {
    return (
        // складывается в тег body
        <MainLayout title={'Home Page'}>

            <h1>Hello next.js! </h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>


            <p>KMDKWEJIJWVOWVMNVWNVEINVOW</p> 
        </MainLayout>
    )
}