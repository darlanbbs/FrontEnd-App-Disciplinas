import styled from "styled-components";
interface Props {
  color: string;
}

export const MiniCardContainer = styled.div<Props>`
  border-radius: 8px;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 15px 0px;
  position: relative;
  margin-bottom: 10px;
  width: 230px;
  height: 160px;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 5px;
  margin-left: 15px;
`;

export const SubTitle = styled.h2`
  font-size: 0.8em;
  color: #ccc;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const EndSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 0 0 8px 8px;
`;

export const IconAndNote = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #0f0f0fb2;
  width: 100%;
`;

export const Note = styled.span`
  color: ${(props) => {
    // @ts-ignore
    if (props.nota <= 5) return "red";
    // @ts-ignore
    if (props.nota <= 8) return "yellow";
    return "green";
  }};
  margin-left: 5px;
`;
