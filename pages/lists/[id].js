import Link from 'next/link'

import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown'

import { useRouter } from 'next/router';
import { getListData, getAllListIds } from '../../lib/list';

import { Box, Heading, Text } from '@chakra-ui/react'

export default function Listata(props) {
    const router = useRouter();

    if (router.isFallback || !props) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Box>
                <Heading>{props.title}</Heading>
                <Text>{props.created_at}</Text>
            </Box>
            <ReactMarkdown 
                components={ChakraUIRenderer()}
                children={props.content}
                skipHtml
            />
            <Link href='/lists'>BookList へ戻る</Link>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllListIds();

    return {
        paths, 
        fallback: true,
    }
}

const markdownToHtml = async (md) => {
    const processor = unified().use(markdown).use(remark2rehype).use(html);
    const res = await processor.process(md)

    // const res = await remark().use(html).process(markdown);
    return res;
}

export async function getStaticProps({ params }) {
    const list = await getListData(params.id);
    const title = list.title 
    const created_at = list.created_at
    const content = list.content
    
    return {
        props: {
            title: title,
            created_at: created_at,
            content: content
        },
        revalidate: 3
    }
}