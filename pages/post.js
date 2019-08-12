import { useRouter } from 'next/router';
import { withLayout, Layout } from '../components/MyLayout';

const Content = () => {
    const router = useRouter();
    return (
    <>
        <h1>{router.query.title}</h1>
        <p>Boca</p>
    </>
    )
}

const Page2 = () => <Content />

const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>River play va para la B.</p>
        </Layout>
    );
};

export default withLayout(Page2);