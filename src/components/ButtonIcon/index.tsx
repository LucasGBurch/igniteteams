import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; // Ícones disponíveis dinamicamente;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} type='PRIMARY' />
    </Container>
  );
}
