import Head from 'next/head';
import { useRouter } from 'next/router';

export type OgImageType = { path: string, width: number, height: number }
export type OgArticleType = { title: string, publisher: string, category: string, publishedTime: string }

const Header = ({ pageName, pageDesc, ogImage, article }: { pageName: string, pageDesc: string, ogImage?: OgImageType, article?: OgArticleType }) => {

    const router = useRouter()
    const path = router.pathname;

    return (
        <Head>
            <title>DumbCode {pageName}</title>
            <meta name="description" content={pageDesc} />

            <link rel="icon" href="/images/brand/favicon.ico" />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/brand/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/brand/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/brand/favicon-16x16.png" />
            <link rel="manifest" href="/images/brand/site.webmanifest" />

            <meta property="og:site_name" content="DumbCode" />
            <meta property="og:title" content={article ? article.title : "DumbCode " + pageName} />
            <meta property="og:description" content={pageDesc} />

            {article || <meta property="og:type" content="website" />}
            {article && <meta property="article:publisher" content={article.publisher} />}
            {article && <meta property="article:section" content={article.category} />}
            {article && <meta property="article:published_time " content={article.publishedTime} />}

            {ogImage && <meta property="og:image" content={ogImage.path} />}
            {ogImage && <meta property="og:image:width" content={`${ogImage.width}`} />}
            {ogImage && <meta property="og:image:height" content={`${ogImage.height}`} />}
            <meta property="og:url" content={"https://dumbcode.net" + path} />
        </Head>
    );
}

export default Header;