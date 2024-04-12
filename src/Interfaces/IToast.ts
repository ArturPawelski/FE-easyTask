type ToastFunction = (description: string, title?: string) => void;

interface UseToastNotificationsReturn {
  successToast: ToastFunction;
  errorToast: ToastFunction;
}
