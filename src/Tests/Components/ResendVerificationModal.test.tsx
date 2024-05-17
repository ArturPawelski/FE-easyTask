import { render, screen } from '@testing-library/react';

import * as AuthHook from '../../Hooks/Auth/useResendVerification';
import ResendVerificationModal from '../../Components/Auth/ResendVerificationModal';
import * as Store from '../../Store/Auth/useResendVerificationModalStore';

vi.mock('../../Store/Auth/useResendVerificationModalStore', () => ({
  useResendVerificationModalStore: vi.fn(),
}));

vi.mock('../../Hooks/Auth/useResendVerification', () => ({
  useResendVerification: vi.fn(),
}));

const mockedUseResendVerification = AuthHook.useResendVerification as any;
const mockeduseResendVerificationModalStore = Store.useResendVerificationModalStore as any;

describe('ResendVerificationModal', () => {
  beforeEach(() => {
    vi.resetAllMocks();

    mockeduseResendVerificationModalStore.mockReturnValue({
      isModalOpen: true,
      openModal: vi.fn(),
      closeModal: vi.fn(),
    });

    mockedUseResendVerification.mockImplementation(() => ({
      mutate: vi.fn(),
      isLoading: false,
    }));
  });

  it('renders correctly', async () => {
    render(<ResendVerificationModal />);
    expect(screen.getByText('Resend Verification Email')).toBeInTheDocument();
  });
});
