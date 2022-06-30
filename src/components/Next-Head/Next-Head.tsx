import  Head  from 'next/head';

interface NextHeadProps{
        title:string;
        metaName: string;
        metaContent: string;
        linkIconHref:string;
}

export function NextHead({title,metaName,metaContent,linkIconHref}: NextHeadProps){
    return(
        <Head>
            <title>{title}</title>
            <meta name={metaName} content={metaContent} />
            <link rel="icon" href={linkIconHref} />
        </Head>
    )
}