import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { useRef } from 'react';

import { HoverModal } from '@src/components/hover/modal/HoverModal';
import { SearchHoverModal } from '@src/components/hover/modal/HoverModal.stories';

import useCountdown from '@hooks/useCountdown';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HoverResult from './HoverResult';

const HoverModalInjected = () => {
  const [_url, _setUrl] = useState<string>('');
  const url = useRef(_url);
  const setUrl = (value: string) => {
    url.current = value;
    _setUrl(value);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const getIsModalOpen = isModalOpen ? 'visible' : 'hidden';

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { countdown, startCountdown, stopCountdown } = useCountdown(3, () => {
    setIsSearched(true);
  });

  const getAnchorElement = (target: EventTarget): HTMLAnchorElement | null => {
    const element = target as HTMLElement;

    if (element.tagName === 'A') {
      return element as HTMLAnchorElement;
    }

    const parentNode = element.parentNode as HTMLElement;
    if (parentNode && parentNode.tagName === 'A') {
      return parentNode as HTMLAnchorElement;
    }

    return null;
  };

  const handleMouseEnter = (event: MouseEvent) => {
    let element = getAnchorElement(event.target);

    if (element != null) {
      if (element.href != undefined && element.href != '' && element.href != url.current) {
        setPosition({ x: event.clientX, y: event.clientY });
        element.style.backgroundColor = 'yellow';

        setUrl(element.href);
        startCountdown();
        setIsModalOpen(true);
        setIsSearched(false);
      }
    }
  };

  const handleMouseLeave = (event: MouseEvent) => {
    let element = getAnchorElement(event.target);

    if (element) {
      element.style.backgroundColor = '';
    }

    setUrl('');
    stopCountdown();
    setIsModalOpen(false);
    setIsSearched(false);
  };

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          position: 'fixed',
          left: `${position.x + 5}px`,
          top: `${position.y + 5}px`,
          zIndex: '9999999999',
          visibility: getIsModalOpen,
        }}>
        {isSearched ? (
          <HoverResult url={url.current} />
        ) : (
          <ModalWrapperLoading className="ani_fadein">
            <HoverModal
              {...SearchHoverModal.args}
              label={`${countdown}초 뒤 분석이 진행됩니다.`}
              caption={`${url.current}`}
            />
          </ModalWrapperLoading>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default HoverModalInjected;

const ModalWrapperLoading = styled.div`
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
