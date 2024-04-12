import { useToast } from '@chakra-ui/react';

export const useToastNotifications = (): UseToastNotificationsReturn => {
  const toast = useToast();

  const successToast = (description: string, title: string = 'Success') => {
    toast({
      title,
      description,
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  };

  const errorToast = (description: string, title: string = 'Error') => {
    toast({
      title,
      description,
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  };

  return { successToast, errorToast };
};
