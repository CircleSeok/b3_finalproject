import React from 'react';
import styled from 'styled-components';
import InnerPhoto from '../../../assets/slider1.avif';
import TapHeart from '../../../assets/TapHeart.avif';
import gyongrim from '../../../assets/gyongrim.avif';
import donggung from '../../../assets/donggung.avif';
import gumsung from '../../../assets/gumsung.avif';
import deabang from '../../../assets/deabang.avif';
import hwagae from '../../../assets/hwagae.avif';
import chang from '../../../assets/chang.avif';
import { Link } from 'react-router-dom';

export default function Spot() {
  const gorim = () => {
    window.location.href = '/spot/128116';
  };

  const godong = () => {
    window.location.href = '/spot/128526';
  };

  const gogumsung = () => {
    window.location.href = '/spot/126407';
  };

  const godeabang = () => {
    window.location.href = '/spot/126225';
  };

  const gohwagae = () => {
    window.location.href = '/spot/2786913';
  };

  const gochang = () => {
    window.location.href = '/spot/126511';
  };

  return (
    <WarpDiv>
      <InnerBox1>
        <InnerList>
          <InnerImg src={gyongrim} />
          <InnerNmb>1</InnerNmb>
          <InnerText>
            <InnerTextH3>경주 계림</InnerTextH3>
            <InnerTextp>김알지의 탄생 설화가 깃든 숲</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>9,812</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={gorim}>바로가기</InnerButton>
        </InnerList>

        <InnerList>
          <InnerImg src={donggung} />
          <InnerNmb>2</InnerNmb>
          <InnerText>
            <InnerTextH3>동궁과 월지</InnerTextH3>
            <InnerTextp>신라 조경예술의 극치를 보여준다.</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>8,181</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={godong}>바로가기</InnerButton>
        </InnerList>

        <InnerList>
          <InnerImg src={gumsung} />
          <InnerNmb>3</InnerNmb>
          <InnerText>
            <InnerTextH3>금성산성</InnerTextH3>
            <InnerTextp>고려시대 이후 입보용으로 사용된 성</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>7,522</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={gogumsung}>바로가기</InnerButton>
        </InnerList>
      </InnerBox1>

      <InnerBox2>
        <InnerList>
          <InnerImg src={deabang} />
          <InnerNmb>4</InnerNmb>
          <InnerText>
            <InnerTextH3>대방진 굴항</InnerTextH3>
            <InnerTextp>경상남도 사천시 대방동에 있는 인공항구</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>7,117</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={godeabang}>바로가기</InnerButton>
        </InnerList>

        <InnerList>
          <InnerImg src={hwagae} />
          <InnerNmb>5</InnerNmb>
          <InnerText>
            <InnerTextH3>화개동천</InnerTextH3>
            <InnerTextp>우리나라에서 처음으로 차나무를 심은 곳</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>5,401</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={gohwagae}>바로가기</InnerButton>
        </InnerList>

        <InnerList>
          <InnerImg src={chang} />
          <InnerNmb>6</InnerNmb>
          <InnerText>
            <InnerTextH3>창경궁</InnerTextH3>
            <InnerTextp>옛 수강궁터에 창건한 궁</InnerTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>4,991</p>
            </LikeBox>
          </InnerText>
          <InnerButton onClick={gochang}>바로가기</InnerButton>
        </InnerList>
      </InnerBox2>
    </WarpDiv>
  );
}
const WarpDiv = styled.div`
  width: 90%;
  height: 600px;
  margin-left: 5%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
`;

const InnerNmb = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
`;

const InnerBox1 = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  gap: 20px;
`;

const InnerBox2 = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  gap: 20px;
`;

const InnerList = styled.div`
  width: 540px;
  height: 190px;
  display: flex;
  border: 1px solid #6478ff;
  box-shadow: 5px 5px #d1d1d1;
  border-radius: 16px;
`;

const InnerImg = styled.img`
  width: 200px;
  height: 145px;
  margin-top: 20px;
  margin-left: 25px;
`;

const InnerText = styled.div`
  margin-top: 21px;
  margin-left: 20px;
`;

const InnerTextH3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const InnerTextp = styled.p`
  color: #7f7f7f;
  margin-top: 5px;
`;

const LikeBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 83px;
`;

const LikeImg = styled.img`
  width: 20px;
  height: 20px;
`;

const InnerButton = styled.button`
  position: absolute;
  margin-left: 450px;
  border: 1px solid #6478ff;
  border-radius: 10px;
  background-color: white;
  color: #6478ff;
  width: 66px;
  height: 30px;
  margin-top: 137px;
  &:hover {
    border: 1px solid white;
    border-radius: 10px;
    background-color: #6478ff;
    color: white;
  }
`;
