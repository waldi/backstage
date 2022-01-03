/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Entity } from '@backstage/catalog-model';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { renderWithEffects, TestApiProvider } from '@backstage/test-utils';
import { GoCdBuildsComponent } from './GoCdBuildsComponent';
import { gocdApiRef } from '../../plugin';
import { GoCdApi } from '../../api/gocdApi';

const mockApiClient: GoCdApi = {
  getPipelineHistory: jest.fn(async () => ({
    _links: { next: { href: 'some-href' } },
    pipelines: [],
  })),
};

describe('GoCdArtifactsComponent', () => {
  const entityValue = { entity: { metadata: {} } as Entity };

  const renderComponent = () =>
    renderWithEffects(
      <TestApiProvider apis={[[gocdApiRef, mockApiClient]]}>
        <EntityProvider entity={entityValue.entity}>
          <GoCdBuildsComponent />
        </EntityProvider>
      </TestApiProvider>,
    );

  it('should display an empty state if an app annotation is missing', async () => {
    const rendered = await renderComponent();

    expect(await rendered.findByText('Missing Annotation')).toBeInTheDocument();
  });
});
