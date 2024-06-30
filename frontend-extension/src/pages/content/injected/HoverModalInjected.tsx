import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HoverEvent from './HoverEvent';

const HoverModalInjected = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HoverEvent />
    </QueryClientProvider>
  );
};

export default HoverModalInjected;
