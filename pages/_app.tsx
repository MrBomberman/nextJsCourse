import '../styles/main.scss';
import NextNprogress from 'nextjs-progressbar'; // создаем лоадинг индикатор
// этот комонент позволяет взаимодействовать со структурой всего приложения
export default function MyApp({Component, pageProps}){ // компонент - та страница, которую мы отображаем в зависимости от url адреса
    // здесь указываем стиль нашего шрифта в теге тела, собиая при этом текущий компонент со всеми пропсами
    return (
        <>
            <NextNprogress
            color="green"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
            />
            <Component {...pageProps}/>
            {/* <style jsx global>
                {`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}
            </style> */}
        </>
    )
}