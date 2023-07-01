import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';
import React from 'react';

export function Groups() {
  return (
    <Container>
      <Header /*showBackButton*/ />
      <Highlight title='Turmas' subtitle='jogue com a sua turma' />

      <GroupCard title='Galera do Ignite'  />
    </Container>
  );
}
