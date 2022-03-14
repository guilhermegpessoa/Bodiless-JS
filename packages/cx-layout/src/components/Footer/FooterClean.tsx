/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { Div, designable } from '@bodiless/fclasses';
import { asCxTokenSpec } from '@bodiless/cx-elements';
import { MenuClean } from '@bodiless/cx-navigation';
import { RewardsClean } from './Rewards';
import { SocialLinksClean } from './SocialLinks';
import type { FooterComponents, FooterProps } from './types';

const footerComponents: FooterComponents = {
  Wrapper: Div,
  Container: Div,
  SectionTop: Div,
  Rewards: RewardsClean,
  FooterMenu: MenuClean,
  SectionBottom: Div,
  Copyright: Div,
  SocialLinks: SocialLinksClean,
};

const FooterCleanBase: FC<FooterProps> = ({ components: C }) => (
  <C.Wrapper>
    <C.Container>
      <C.SectionTop>
        <C.Rewards />
        <C.FooterMenu />
      </C.SectionTop>
      <C.SectionBottom>
        <C.Copyright />
        <C.SocialLinks />
      </C.SectionBottom>
    </C.Container>
  </C.Wrapper>
);

const FooterClean = designable(footerComponents, 'Footer')(FooterCleanBase);

const asFooterToken = asCxTokenSpec<FooterComponents>();

export {
  FooterClean,
  asFooterToken,
};