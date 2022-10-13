import { Camera, CameraType } from "expo-camera";
import React, { useContext, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const Snap = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  const snap = async () => {
    console.log("snap");
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  requestPermission();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}
      ratio={"16:9"}
    >
      <Snap onPress={snap} />
    </ProfileCamera>
  );
};
