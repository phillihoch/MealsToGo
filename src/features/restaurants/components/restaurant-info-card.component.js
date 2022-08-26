import React from "react";
import styled from "styled-components";
import { Card, Text } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Philipp's Dönerbude",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg",
    ],
    address = "Am Marktplatz 3, 97638 Mellrichstadt",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
