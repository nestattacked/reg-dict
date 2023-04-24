import React from 'react';
import type { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CenterRow, Column } from '../../common/flex';
import { gray, hardOpacity, opacitiedColor, strongOpacity, white } from '../../../color';
import logoImage from '../../../asset/image/logo.png';
import { useIsWide } from '../../../hook/use-is-width';
import { MaxBox } from '../../common/max-box';
import { Search } from './search';
import type { SearchProps } from './search';

const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${white};
  border-bottom: 1px solid ${gray};
  box-shadow: 0 1px 3px ${opacitiedColor(gray, hardOpacity)}, 0 1px 3px ${opacitiedColor(gray, strongOpacity)};
`;

const Logo = styled.img`
  height: 50px;
`;
const LogoContainer1 = styled.div`
  display: flex;
  padding: 10px 40px 10px 0;
`;
const LogoContainer2 = styled.div`
  padding: 20px 0;
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 0px 30px 30px;
`;

const Header: FunctionComponent<SearchProps> = ({ searchKey, setSearchKey, showExamples, searchWords }) => {
  const isWide = useIsWide();

  const logo = <Logo src={logoImage} />;
  return isWide ? (
    <Container>
      <CenterRow>
        <LogoContainer1>{logo}</LogoContainer1>
        <MaxBox maxWidth={600}>
          <Search
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            showExamples={showExamples}
            searchWords={searchWords}
          />
        </MaxBox>
      </CenterRow>
    </Container>
  ) : (
    <Container>
      <Column>
        <LogoContainer2>{logo}</LogoContainer2>
        <SearchContainer>
          <Search
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            showExamples={showExamples}
            searchWords={searchWords}
          />
        </SearchContainer>
      </Column>
    </Container>
  );
};

export { Header };
