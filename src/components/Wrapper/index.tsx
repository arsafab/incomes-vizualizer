import { ItemWrapper } from '../helpers/ItemWrapper';
import styled from 'styled-components';

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  padding: 15px 24px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
