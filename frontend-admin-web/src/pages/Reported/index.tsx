import React, { useState } from 'react'
import * as Styled from './style'
import PageLayout from '@/components/PageLayout'
import RemoveButton from '@/components/Button/RemoveButton'
import { TURLIds, TURLList } from '@/types/urlList'
import URLList from '@/components/URLList'
import { useGetUrlList } from '@/hooks/useGetUrlList'
import { usePostUrl } from '@/hooks/usePostUrl'

export default function Reported() {
  const { reportedUrlData } = useGetUrlList(); // TODO: 이걸로 수정해야함
  const [selectedIds, setSelectedIds] = useState<TURLIds>({ url_list: [] });
  const { mutate } = usePostUrl();

  const toggleId = (id: number) => {
    setSelectedIds((prev: TURLIds) => {
      if (prev.url_list.includes(id)) {
        return { url_list: prev.url_list.filter(item => item !== id) };
      } else {
        return { url_list: [...prev.url_list, id] };
      }
    });
  };
  
  const handleDeleteUrl = () => {
    if(selectedIds.url_list.length === 0) {
      alert('삭제할 URL을 선택해주세요.')
      return
    }
    mutate(selectedIds)
  }


  return (
    <PageLayout>
      <RemoveButton onClick={handleDeleteUrl}/>
      <Styled.Container>
        {reportedUrlData.map((urlData) => (
          <URLList key={urlData.url_id} urlData={urlData} onToggle={() => toggleId(urlData.url_id)} selected={selectedIds.url_list.includes(urlData.url_id)} />
        ))}
      </Styled.Container>
    
    </PageLayout>
  )
}

const reportedUrlData : TURLList[] = [
  {
    url_id: 1,
    label: 'Phishing',
    url: 'https://www.google.com'
  },
  {
    url_id: 2,
    label: 'Defacement',
    url: 'https://www.google.com'
  },
  {
    url_id: 3,
    label: 'Phishing',
    url: 'https://www.google.com'
  },
  {
    url_id: 4,
    label: 'Malware',
    url: 'https://www.google.com'
  },
  {
    url_id: 5,
    label: 'Defacement',
    url: 'https://www.google.com'
  },
  {
    url_id: 6,
    label: 'Malware',
    url: 'https://www.google.com'
  },
  {
    url_id: 7,
    label: 'Phishing',
    url: 'https://www.google.com'
  },
  {
    url_id: 8,
    label: 'Phishing',
    url: 'https://www.google.com'
  },
  {
    url_id: 9,
    label: 'Malware',
    url: 'https://www.google.com'
  },
  {
    url_id: 10,
    label: 'Defacement',
    url: 'https://www.google.com'
  },
  {
    url_id: 11,
    label: 'Malware',
    url: 'https://www.google.com'
  },
  {
    url_id: 12,
    label: 'Defacement',
    url: 'https://www.google.com'
  }
]