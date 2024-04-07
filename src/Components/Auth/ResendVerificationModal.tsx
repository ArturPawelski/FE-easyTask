import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, Input, FormErrorMessage, Text, Box } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useResendVerification } from '../../Hooks/Auth/useResendVerification';
import { useToastNotifications } from '../UI/ToastMessage';

const ResendVerificationModal: React.FC<ResendVerificationModalProps> = ({ isOpen, onClose }) => {
  const { successToast, errorToast } = useToastNotifications();
  const { mutate: resendVerification, isLoading } = useResendVerification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
    resendVerification(email, {
      onSuccess: (data) => {
        successToast(data.message);
        onClose();
      },
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message || 'An error occurred';
        errorToast(errorMessage);
      },
    });
  };

  return (
    <Modal size={['sm', 'xl']} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx={4}>
        <ModalHeader>Resend Verification Email</ModalHeader>
        <ModalCloseButton isDisabled={isLoading} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Box mb={4}>
              <Text>Please enter your email address to resend the verification email.</Text>
            </Box>
            <FormControl isInvalid={!!errors.email}>
              <Input
                disabled={isLoading}
                id='email'
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button isDisabled={isLoading} isLoading={isLoading} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button isDisabled={isLoading} isLoading={isLoading} colorScheme='purple' type='submit'>
              OK
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ResendVerificationModal;
