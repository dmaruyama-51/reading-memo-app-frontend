import { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <>  
            <Box as='footer' role='contentinfo' mx='auto' maxW='7xl' py='12' px={{ base: '4', md: '8' }}>
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()} dmaruyama. All rights reserved.
                </Text>
            </Box>
        </>
    )
}