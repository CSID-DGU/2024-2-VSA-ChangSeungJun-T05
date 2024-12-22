import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { useRef } from 'react';

import { HoverModal } from '@src/components/hover/modal/HoverModal';
import { SearchHoverModal } from '@src/components/hover/modal/HoverModal.stories';

import useCountdown from '@hooks/common/useCountdown';

import { getHoverResult } from './getHoverResult';
import { TgetUrlResponse } from '@root/src/apis/getUrl/_type';
import { useGetUrl } from '@root/src/hooks/apis/useGetURL';

const MAX_ITEMS = 20;

const HoverEvent = () => {
  const [_url, _setUrl] = useState<string>('');
  const url = useRef(_url);
  const setUrl = (value: string) => {
    url.current = value;
    _setUrl(value);
  };

  const [searchUrl, setSearchUrl] = useState<string>('');
  const { data, isLoading, error } = useGetUrl(searchUrl);

  useEffect(() => {
    const updateLocalStorage = (url: string, data: TgetUrlResponse) => {
      const localStorageData = localStorage.getItem('urlData');
      let urlData: { [key: string]: TgetUrlResponse } = {};

      if (localStorageData) {
        urlData = JSON.parse(localStorageData);
      }

      if (Object.keys(urlData).length >= MAX_ITEMS) {
        const oldestKey = Object.keys(urlData)[0];
        delete urlData[oldestKey];
      }

      urlData[url] = data;
      localStorage.setItem('urlData', JSON.stringify(urlData));
    };

    if (data && !error) {
      updateLocalStorage(url.current, data);
    }
  }, [data, error, url]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const getIsModalOpen = isModalOpen ? 'visible' : 'hidden';

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { countdown, startCountdown, stopCountdown } = useCountdown(3, () => {
    setIsSearched(true);
    setSearchUrl(url.current);
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

        const storedData = localStorage.getItem('urlData');

        if (storedData) {
          const urlData = JSON.parse(storedData);
          if (urlData.hasOwnProperty(element.href)) {
            console.log('세션 데이터 있음');
            setIsModalOpen(true);
            setIsSearched(true);

            getHoverResult(urlData[element.href]);
            return;
          }
        }
        console.log('세션 데이터 없음');
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
    let urlData: { [key: string]: TgetUrlResponse } = {};
    localStorage.setItem('urlData', JSON.stringify(urlData));

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x + 5}px`,
        top: `${position.y + 5}px`,
        zIndex: '9999999999',
        visibility: getIsModalOpen,
      }}>
      {isSearched ? (
        getHoverResult(data, isLoading, error)
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
  );
};

export default HoverEvent;

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
