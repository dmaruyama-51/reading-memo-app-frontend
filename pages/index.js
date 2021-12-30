import Head from "next/head";
import Image from 'next/image';
import { Heading, Box, Button, Text, Flex, Center } from '@chakra-ui/react';

import List from '../components/list/list'
import { getAllListData } from "../lib/list";

export default function Home( {lists} ) {
  return (
    <>
      <Head>
        <title>Reading Memo App</title>
      </Head>

      <Box>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Image 
            src='/top.png'
            alt='top'
            width={1280}
            height={300}
          />
        </Flex>        
      </Box>

      <Center>
        <Box m={10}>
            <Heading>Reading Memo</Heading>
            <Text>読書と学びの記録をつけましょう。</Text>
        </Box>
        
      </Center>
    </>
  )
}


