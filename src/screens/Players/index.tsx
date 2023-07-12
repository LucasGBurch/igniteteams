import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';

import { Container, Form } from './styles';
import { Filter } from '@components/Filter';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false} // Corretor não tentar corrigir o nome
        />
        <ButtonIcon icon='home' />
      </Form>
      
      <Filter title='Time A' isActive />
    </Container>
  );
}
