import Head from "next/head";
import Image from 'next/image';
import { Heading, Box, Button, Text, Flex, Center } from '@chakra-ui/react';

import List from '../components/list/list'
import { getAllListData } from "../lib/list";


export default function Lists( {lists} ) {
    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                {lists && lists.map((list) => <List key={list.id} list={list} />)}
            </Box>`
        </>
    )
}


export async function getStaticProps() {
    const lists = await getAllListData();
  
    return {
      props: { lists },
      revalidate: 3,
    }
  }