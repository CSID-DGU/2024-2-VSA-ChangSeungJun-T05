import React, { useState } from 'react'
import * as Styled from './style'
import PageLayout from '@/components/PageLayout'
import RemoveButton from '@/components/Button/RemoveButton'
import { TURLList } from '@/types/urlList'
import URLList from '@/components/URLList'

export default function Reported() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleId = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <PageLayout>
      <RemoveButton />
      <Styled.Container>
        {reportedUrlData.map((urlData) => (
          <URLList key={urlData.url_id} urlData={urlData} onToggle={() => toggleId(urlData.url_id)} selected={selectedIds.includes(urlData.url_id)} />
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