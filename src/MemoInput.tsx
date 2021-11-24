import { useState } from "react";
import styled from "styled-components";
import Memo from "./Memo";
import Icon from "./Icon";

const Container = styled.span<any>`
  position: relative;
`;
const TextArea = styled.span<any>`
  color: ${(props) =>
    props.active === true ? props.color ?? "black" : "black"};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

interface IProps {
  memoColor?: string;
  contents?: any;
  width: string;
  height: string;
  title?: string;
  titleStyle?: any;
  description?: string;
  descriptionStyle?: any;
  captionSize?: number;
  captionColor?: string;
}

function MemoInput(props: IProps) {
  const [memoState, setMemoState] = useState(false);

  const handleTextClick = () => {
    setMemoState((prev) => !prev);
  };
  return (
    <Container>
      <TextArea
        onClick={handleTextClick}
        active={memoState}
        color={props.memoColor}
      >
        {props.contents}
      </TextArea>
      <Memo
        color={props.memoColor}
        open={memoState}
        width={props.width}
        height={props.height}
        title={props.title}
        titleStyle={props.titleStyle}
        description={props.description}
        descriptionStyle={props.descriptionStyle}
      />
      <Icon size={props.captionSize} color={props.captionColor}></Icon>
    </Container>
  );
}
export default MemoInput;
