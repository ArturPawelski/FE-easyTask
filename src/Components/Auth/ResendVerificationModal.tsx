import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, Input, FormErrorMessage, Text, Box } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ResendVerificationModal: React.FC<ResendVerificationModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
    onClose();
  };

  return (
    <Modal size={['sm', 'xl']} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx={4}>
        <ModalHeader>Resend Verification Email</ModalHeader>
        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Box mb={4}>
              <Text>Please enter your email address to resend the verification email.</Text>
            </Box>
            <FormControl isInvalid={!!errors.email}>
              <Input
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
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='purple' type='submit'>
              OK
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ResendVerificationModal;
