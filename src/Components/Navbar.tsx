import { Container, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Flex as='header' position='fixed' w='100%' backgroundColor='#1A202C' textColor='white' p={1}>
      <Container as='main'>
        <nav>
          <Flex gap={4} justify='center' align='center'>
            <Link to='/'>Home</Link>
            <Link to='/auth/login'>login</Link>
          </Flex>
        </nav>
      </Container>
    </Flex>
  );
};

export default Navbar;
