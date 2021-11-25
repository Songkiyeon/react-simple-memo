import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const MemoArea = styled.div<any>`
  overflow: hidden;
  position: absolute;
  top: 20px;
  left: ${(props: any) => props.left};
  right: 0;
  width: 0px;
  height: 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color ?? "#f1c13a"};
  box-shadow: 3px 3px 11.5px -1px #323232;
  z-index: 1;

  .memoline {
    width: calc(100% - 20px);
    height: 1px;
    margin: 20px 0px;
    background-color: #787272;
  }
`;
const MemoTitle = styled.div<any>`
  font-size: 20px;
`;
const MemoDescription = styled.div<any>`
  width: calc(100% - 20px);
  height: auto;
  font-size: 15px;
`;
const MemoWrapper = styled.div<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
`;

interface IProps {
  open: boolean;
  width: string;
  height: string;
  color?: string;
  title?: any;
  titleStyle?: any;
  description?: any;
  descriptionStyle?: any;
}

function Memo(props: IProps) {
  const targetContainer = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: "0px", height: "0px" });
  const [left, setLeft] = useState("0");

  useEffect(() => {
    gsap.to(targetContainer.current, {
      width: size.width,
      height: size.height,
      duration: 0.2,
    });
  }, [size]);

  useEffect(() => {
    if (props.open) {
      setSize({
        width: props.width,
        height: props.height,
      });
    } else {
      setSize({
        width: "0px",
        height: "0px",
      });
    }
  }, [props.open]);

  useEffect(() => {
    if (targetContainer.current !== null) {
      const xl = targetContainer.current.getBoundingClientRect().left;
      const maxWidth = window.innerWidth;
      const rightEnd = xl + Number.parseInt(props.width);

      const xr = targetContainer.current.getBoundingClientRect().right;
      const leftEnd = xr - Number.parseInt(props.width);
      console.log("LeftEnd", leftEnd);

      if (rightEnd < maxWidth) {
        setLeft("0");
      } else if (leftEnd > 0) {
        setLeft("auto");
      } else {
        console.log("xl", xl);
        console.log("here");
        setLeft(`${-xl}px`);
      }
    }
  }, []);

  return (
    <MemoArea ref={targetContainer} left={left} color={props.color}>
      <MemoWrapper width={props.width} height={props.height}>
        <MemoTitle style={props.titleStyle}>{props.title}</MemoTitle>
        <div className={"memoline"}></div>
        <MemoDescription style={props.descriptionStyle}>
          {props.description}
        </MemoDescription>
      </MemoWrapper>
    </MemoArea>
  );
}
export default Memo;
