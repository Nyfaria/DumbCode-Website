import Head from 'next/head';

const Header = ({ pageName }: { pageName: string}) => {
    return (
        <Head>
            <title>DumbCode {pageName}</title>
            <meta name="description" content="The home of everything DumbCode" />
            <link rel="icon" href="/images/brand/favicon.ico" />
        </Head>
    );
}

export default Header;