import Link from "next/link";
import MainLayout from "../components/MainLayout";
import classes from '../styles/error.module.scss'; // у объект классес мы можем забирать необходимые нам классы

// создаем кастомную страницу ошибки 404
export default function ErrorPage() {
    return (
        <>
        <MainLayout>
        <h1 className={classes.error}>Error 404</h1>
            <p>Please <Link href='/'><a>Go back to safety</a></Link></p>  
        </MainLayout>

        </>
    )
}