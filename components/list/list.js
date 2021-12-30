import Link from 'next/link'
import { Box } from '@chakra-ui/react'

export default function List({ list }) {
    return (
        <Link href={`/lists/${list.id}`}>
            <Box>
                <img src={list.image}  alt='list' />
                <Box>
                    <p>{list.title}</p>
                </Box>
            </Box>
        </Link>
    )
}