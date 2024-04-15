import { Button, Container, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { useUserStore } from '../store/useUserStore';
import { useLogout } from '../Hooks/Auth/useLogout';
import { useCheckSession } from '../Hooks/Auth/useCheckSession';
import { useEffect } from 'react';
import LoadingPage from './UI/LoadingPage';

const Navbar: React.FC = () => {
  const { mutate: logout, isLoading: logoutLoading } = useLogout();
  const { data: UserData, isLoading: sessionLoading } = useCheckSession();
  const { setUser, email, name, id } = useUserStore();

  useEffect(() => {
    if (UserData?.data) {
      const { email, id, name } = UserData.data;
      setUser(email, id, name);
    }
  }, [UserData, setUser]);

  const logoutUser = () => {
    logout();
  };

  if (logoutLoading || sessionLoading) {
    return <LoadingPage />;
  }

  return (
    <Flex as='header' position='fixed' w='100%' backgroundColor='#1A202C' textColor='white' p={1}>
      <Container as='main'>
        <nav>
          <Flex gap={4} justify='center' align='center'>
            <Link to='/'>Home</Link>

            <Link to='/auth/login'> DSPT login</Link>
            <Menu>
              <MenuButton as={Button} rightIcon={<CiSettings size={28} />}>
                Actions
              </MenuButton>
              <MenuList textColor={'black'}>
                <MenuItem>My Accout </MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <p>{email}</p>
            <p>{name}</p>
            <p>{id}</p>
          </Flex>
        </nav>
      </Container>
    </Flex>
  );
};

export default Navbar;
