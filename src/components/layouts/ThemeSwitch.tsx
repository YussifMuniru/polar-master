import React from 'react';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { usePrefixedTranslation } from 'hooks';
import { useStoreActions, useStoreState } from 'store';

const Styled = {
  Button: styled(Button)`
    color: inherit;
    padding: 0 10px 0 0;
    &:focus,
    &:active {
      color: inherit;
    }
  `,
};

const ThemeSwitch: React.FC = () => {
  const { l } = usePrefixedTranslation('cmps.layouts.ThemeSwitch');

  const { settings } = useStoreState(s => s.app);
  const { updateSettings } = useStoreActions(s => s.app);

  const isLight = settings.theme === 'light';
  const toggleTheme = () => {
    updateSettings({ theme: isLight ? 'dark' : 'light' });
  };

  return (
    <Styled.Button type="link" onClick={toggleTheme}>
      {isLight ? <BulbOutlined /> : <BulbFilled />}
      {isLight ? l('light') : l('dark')}
    </Styled.Button>
  );
};

export default ThemeSwitch;
