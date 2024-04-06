import React, { useState } from 'react';
import { Flex, Text, VStack, Input, Button, FormControl, FormErrorMessage, Container, Box, Center } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useVerifyAccount } from '../../Hooks/Auth/useVerifyAccount';
import { useToastNotifications } from '../../Components/UI/ToastMessage';
import ResendVerificationModal from './Components/ResendVerificationModal';

const VerifyAccount: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { successToast, errorToast } = useToastNotifications();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryToken = queryParams.get('token');
  const { mutate: verifyAccount, isLoading } = useVerifyAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ userCode: string }>();

  const onSubmit: SubmitHandler<{ userCode: string }> = ({ userCode }) => {
    if (queryToken) {
      const verifyData: VerifyDataInterface = {
        code: userCode,
        token: queryToken,
      };

      verifyAccount(verifyData, {
        onSuccess: (data) => {
          navigate('/auth/login');
          successToast(data.message);
        },
        onError: (error: any) => {
          const errorMessage = error.response?.data?.message || 'An error occurred';
          errorToast(errorMessage);
        },
      });
    }
  };

  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        <Container bg='white' p={4} rounded={20}>
          <Text textAlign='center' fontSize='xl' fontWeight='bold'>
            Enter your verification code
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt={4} isInvalid={!!errors.userCode}>
              <VStack>
                <Input
                  id='userCode'
                  placeholder='Enter your code'
                  {...register('userCode', {
                    required: 'The code is required',
                    minLength: { value: 6, message: 'Code must be 6 digits' },
                    maxLength: { value: 6, message: 'Code must be 6 digits' },
                    pattern: { value: /^[0-9]{6}$/, message: 'Code must be numeric and 6 digits' },
                  })}
                  size='lg'
                  width='auto'
                  maxWidth='160px'
                  mx='auto'
                  disabled={isLoading}
                  inputMode='numeric'
                  pattern='[0-9]*'
                />

                <FormErrorMessage>{errors.userCode && errors.userCode.message}</FormErrorMessage>
              </VStack>
            </FormControl>

            <Flex mt={4} justifyContent='center'>
              <Button w='160px' isDisabled={isLoading} isLoading={isLoading} colorScheme='purple' type='submit' variant='solid'>
                Verify
              </Button>
            </Flex>
          </form>
          <Text onClick={() => setModalOpen(true)} mt={4} cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
            Resend verification email
          </Text>
        </Container>
      </Center>
      <ResendVerificationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default VerifyAccount;
