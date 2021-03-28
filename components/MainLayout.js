import Head from "next/head";
import Link from "next/link";
// создаем шаблон-макет сразу для нескольких страниц
export default function MainLayout({children, title="Next app"}){
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="next, js, next.js, react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href='/'><a>Home Page</a></Link>
                <Link href='/about'><a>About Page</a></Link>
                <Link href='/posts'><a>Posts Page</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 65px;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    top: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    text
                }
                nav a {
                    color: white;
                    text-decoration: none;
                }
                main {
                    margin-top: 65px;
                    padding: 1rem;
                }
            `}</style>
        </>

    )
}