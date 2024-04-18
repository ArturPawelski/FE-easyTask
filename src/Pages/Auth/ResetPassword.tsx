import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Flex, Container, Text, Heading, Input, Button, FormControl, FormErrorMessage, InputGroup, InputRightElement, VStack, FormLabel } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import FullPageCentered from '../../Components/Auth/FullPageCentered';
import { useResetPassword } from '../../Hooks/Auth/useResetPassword';

const ResetPassword: React.FC = () => {
  const { mutate: resetPassword, isLoading } = useResetPassword();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryToken = queryParams.get('token');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordInterface>();

  const onSubmit: SubmitHandler<ResetPasswordInterface> = (userData) => {
    if (queryToken) {
      const resetPasswordData: ResetPasswordInterface = {
        verificationCode: userData.verificationCode,
        token: queryToken,
        newPassword: userData.newPassword,
        confirmPassword: userData.confirmPassword,
      };
      resetPassword(resetPasswordData);
    }
  };

  return (
    <FullPageCentered>
      <Container bg='white' p={4} rounded={20}>
        <Heading textAlign='center' fontSize='xl' fontWeight='bold' mb={4}>
          Set Your New Password
        </Heading>
        <Text textAlign='center' mb={4}>
          Enter your verification code and set a new password.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt={4} isInvalid={!!errors.verificationCode}>
            <VStack>
              <Input
                disabled={isLoading}
                id='userCode'
                placeholder='Enter your code'
                {...register('verificationCode', {
                  required: 'The code is required',
                  minLength: { value: 6, message: 'Code must be 6 digits' },
                  maxLength: { value: 6, message: 'Code must be 6 digits' },
                  pattern: { value: /^[0-9]{6}$/, message: 'Code must be numeric and 6 digits' },
                })}
                size='lg'
                width='auto'
                maxWidth='160px'
                mx='auto'
                inputMode='numeric'
                pattern='[0-9]*'
              />
              <FormErrorMessage>{errors.verificationCode && errors.verificationCode.message}</FormErrorMessage>
            </VStack>
          </FormControl>

          <FormControl mt={4} isInvalid={!!errors.newPassword}>
            <FormLabel fontWeight='bold' htmlFor='password'>
              Password
            </FormLabel>
            <InputGroup>
              <Input
                disabled={isLoading}
                id='newPassword'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your new password'
                {...register('newPassword', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                })}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.newPassword && errors.newPassword.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={!!errors.confirmPassword}>
            <FormLabel fontWeight='bold' htmlFor='confirmPassword'>
              Confirm Password
            </FormLabel>
            <InputGroup>
              <Input
                disabled={isLoading}
                id='confirmPassword'
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm your new password'
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) => value === watch('newPassword') || 'The passwords do not match',
                })}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
          </FormControl>

          <Flex mt={4} justifyContent='center'>
            <Button isLoading={false} isDisabled={isLoading} w='160px' colorScheme='purple' type='submit' variant='solid'>
              Update Password
            </Button>
          </Flex>
        </form>

        <Flex mt={4} justifyContent='space-between'>
          <Link to='/auth/login'>
            <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Sign In
            </Text>
          </Link>
          <Link to='/auth/register'>
            <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Sign Up
            </Text>
          </Link>
        </Flex>
      </Container>
    </FullPageCentered>
  );
};

export default ResetPassword;
