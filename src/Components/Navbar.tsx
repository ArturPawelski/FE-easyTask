import { Box, Button, Container, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CiSettings, CiLogout, CiUser } from 'react-icons/ci';
import { useUserStore } from '../Store/Auth/useUserStore';
import { useLogout } from '../Hooks/Auth/useLogout';
import { useCheckSession } from '../Hooks/Auth/useCheckSession';
import { useEffect } from 'react';
import LoadingPage from './UI/LoadingPage';

const Navbar: React.FC = () => {
  const { mutate: logout, isLoading: logoutLoading } = useLogout();
  const { data: UserData, isLoading: sessionLoading } = useCheckSession();
  const { setUser, name, email } = useUserStore();

  useEffect(() => {
    if (UserData?.data) {
      const { email, id, name } = UserData.data;
      setUser(email, id, name);
    }
  }, [UserData, setUser]);

  const logoutUser = (): void => {
    logout();
  };

  if (logoutLoading || sessionLoading) {
    return <LoadingPage />;
  }

  return (
    <Flex as='header' position='fixed' w='100%' backgroundColor='#1A202C' textColor='white' p={1}>
      <Flex px={8} justify='space-between' align='center' w='100%'>
        <Link to='/'>Home</Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<CiSettings size={28} />}>
            {name}
          </MenuButton>
          <MenuList textColor={'black'}>
            <Box px={4} py={2}>
              <Text fontSize='sm' color='gray.500'>
                {email}
              </Text>
            </Box>
            <MenuItem icon={<CiUser size={24} />}>My Account </MenuItem>
            <MenuItem icon={<CiSettings size={24} />}>Settings</MenuItem>
            <MenuItem icon={<CiLogout size={24} />} onClick={logoutUser}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
