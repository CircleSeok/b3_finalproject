import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import chatbot from '../../assets/chatbot.png';

export default function ChatBotModal() {
  const [modal, setModal] = useState(false);
  console.log(modal);
  const modalEvents = () => {
    setModal((prev) => !prev);
  };
  return (
    <Wrapdiv>
      <Chatimgbtn onClick={modalEvents}>
        <ChatingImg src={chatbot} alt="" />
      </Chatimgbtn>
      {modal === true ? <Chat /> : null}
    </Wrapdiv>
  );
}
const Wrapdiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Chatimgbtn = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  width: 58px;
  height: 58px;
  left: 94%;
  top: 90%;
  z-index: 1000;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    width: 40px;
    height: 40px;
    left: 80%;
  }
`;

const ChatingImg = styled.img`
  @media screen and (max-width: 820px) {
    width: 40px;
    height: 40px;
  }
`;
