import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '..';
import theme from '@/theme';
import { useGetUrl } from '@/hooks/useGetUrl';
import { useState } from 'react';
import FormSubmitButton from '@/components/Button/FormSubmitButton';
import * as Styled from './style';
import URLResultDisplay from '@/components/URLResultDisplay';
import * as yup from 'yup';
import { urlPattern } from '@/utils/urlPattern';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form() {
  const [url, setUrl] = useState('');
  const { data, isLoading, error } = useGetUrl(url);

  const validationSchema = yup.object().shape({
    url: yup.string().matches(urlPattern, '유효한 URL을 입력해주세요').required('URL을 입력하세요'),
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formData: { url: string }) => {
    setUrl(formData.url); // 유효성 검사를 통과한 URL만 상태에 설정
  };

  return (
    <>
      <FormProvider {...methods}>
        <FormComponent onSubmit={methods.handleSubmit(onSubmit)}>
          <Styled.InputWrapper>
            <FormComponent.Input
              placeholder="의심되는 URL을 검색해보세요."
              name="url"
              borderColor={theme.colors.formBorder}
            />
            <FormSubmitButton type="submit" />
          </Styled.InputWrapper>
          {methods.formState.errors.url && <Styled.ErrorMessage style={{ color: 'red' }}>{methods.formState.errors.url.message}</Styled.ErrorMessage>}
        </FormComponent>
      </FormProvider>
      <URLResultDisplay isLoading={isLoading} error={error} data={data} />
    </>
  );
}
