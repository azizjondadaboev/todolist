import { memo } from 'react';

import { Container } from '../ui';
import { InnerBlock, LogoLink, Wrapper } from './components';

const Header = () => {
  return (
    <Wrapper>
      <Container height="100%">
        <InnerBlock>
          <LogoLink href="/">Список задач</LogoLink>
        </InnerBlock>
      </Container>
    </Wrapper>
  );
};

export default memo(Header);
