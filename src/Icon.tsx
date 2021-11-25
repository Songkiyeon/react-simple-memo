import React from "react";
import styled from "styled-components";
import MessageIcon from "@mui/icons-material/Message";

interface IProps {
  size?: number;
  color?: string;
}

interface IContainer {
  size: number;
  color: string;
}

const Container = styled.div<IContainer>`
  position: absolute;
  top: -${(props) => props.size}px;
  right: -${(props) => props.size}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

function Icon(props: IProps) {
  const size = props.size ?? 10;
  const color = props.color ?? "orange";
  return (
    <Container size={size} color={color}>
      <MessageIcon style={{ fontSize: size, position: "absolute", top: 0 }} />
    </Container>
  );
}

export default Icon;
