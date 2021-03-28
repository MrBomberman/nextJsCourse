import '../styles/main.css'

export default function MyApp({Component, pageProps}){ // компонент - та страница, которую мы отображаем в зависимости от url адреса
    // здесь указываем стиль нашего шрифта в теге тела, собиая при этом текущий компонент со всеми пропсами
    return (
        <>
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