import { MainStateDispatch } from "@/lib/types";
import { FC } from "react";
import styled from "styled-components";
import { IconContainer } from "./IconContainer";
import { Modal } from "./Modal";

function About() {
  return;
}

type AboutModalProps = {
  isOpen: boolean;
  mainStateDispatch: MainStateDispatch;
};

export const AboutModal: FC<AboutModalProps> = ({ isOpen, mainStateDispatch }) => {
  return (
    <>
      <IconContainer
        onClick={() => mainStateDispatch({ type: "TOGGLE_ABOUT_MODAL" })}
      ></IconContainer>
      {isOpen && <Modal onClose={() => mainStateDispatch({ type: "TOGGLE_ABOUT_MODAL" })}></Modal>}
    </>
  );
};

const AboutText = styled.p`
  margin-bottom: 10px;
`;

const AboutAnchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AboutH2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const AboutContainer = styled.div`
  max-width: 100%;
  max-height: 80vh;
  width: 500px;
  align-items: center;
  background-color: white;
  flex-direction: column;
  display: flex;
`;
