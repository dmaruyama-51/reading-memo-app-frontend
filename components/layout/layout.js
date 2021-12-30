import Navigation from './navigation';
import Footer from './footer';
import {Box} from '@chakra-ui/react';

export default function Layout(props) {
    return (
        <>
            <Box>
                <Navigation />
                <Box mr={100} ml={100} mt={10}>
                    {props.children}
                </Box>
                <Footer />
            </Box>
        </>
    )
}