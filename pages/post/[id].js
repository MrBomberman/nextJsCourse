// назвывая файл с [] скобками мы говорим нексту, что здесь у нас будет в этом файле динамика
import {useRouter} from 'next/router'; // для синхронизации серверных и клиентских параметров
import MainLayout from '../../components/MainLayout';

// по адресу /post/любая цифра
export default function Post() {
    const router = useRouter();
    return (
        <MainLayout>
            <h1>Post {router.query.id}</h1>
        </MainLayout>
    )
}