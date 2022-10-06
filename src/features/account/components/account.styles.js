import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

export const AccountContainer = styled.View`
  background: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]}
  margin-top: ${(props) => props.theme.space[2]}
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
