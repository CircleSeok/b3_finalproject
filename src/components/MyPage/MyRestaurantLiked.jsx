import {
  arrayRemove,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../apis/firebase';
import Loader from '../Loader/Loader';
import noimg from '../../assets/noimg.avif';
import { Link } from 'react-router-dom';
import { combinedAllData } from '../../apis/publicAPI';

const MyRestaurantLiked = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const uid = auth.currentUser.uid;

  const getRestaurantLiked = async () => {
    const q = query(collection(db, 'restaurantlike'), where('uid', '==', uid));
    const data = await getDocs(q);
    const newData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setRestaurant(newData);
    console.log(newData);
  };

  useEffect(() => {
    getRestaurantLiked()
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // 파이어베이스에 저장한 배열의 타이틀을 삭제해보자
  // const delResLiked = async () => {
  //   const docRef = doc(db, 'restaurantlike', uid);
  //   console.log(docRef);
  //   await deleteDoc(docRef);
  // };

  // const deleteRestaurantLiked = async () => {
  //   const uid = auth.currentUser.uid;
  //   const query = query(
  //     collection(db, 'restaurantlike'),
  //     where('uid', '==', uid),
  //     where('contentid', '==', combinedAllData.contentid),
  //   );
  //   const querySnapshot = await getDocs(query);
  //   await Promise.all(
  //     querySnapshot.docs.map(async (doc) => {
  //       await deleteDoc(doc.ref).catch((e) => console.log(e));
  //     }),
  //   );
  // };

  return (
    <>
      <StTicketWrap>
        <StTicket>
          {restaurant.map((data, i) => {
            switch (data.contenttypeid) {
              case '39':
                return (
                  <Link to={`/restaurant/${data.contentid}`}>
                    <StTicketCard key={i}>
                      <StTicketCardLeft>
                        <StTicketHeader>
                          <StCartMenu>음식점</StCartMenu>
                        </StTicketHeader>

                        <StMyTicketImage src={data.img || noimg} alt="사진" />
                      </StTicketCardLeft>
                      <StCartTitle>{data.restaurant.split('[', 1)}</StCartTitle>
                    </StTicketCard>
                  </Link>
                );
              case '32':
                return (
                  <Link to={`/stay/${data.contentid}`}>
                    <StTicketCard key={i}>
                      <StTicketCardLeft>
                        <StTicketHeader>
                          <StCartMenu>숙박</StCartMenu>
                        </StTicketHeader>

                        <StMyTicketImage src={data.img || noimg} alt="사진" />
                      </StTicketCardLeft>
                      <StCartTitle>{data.restaurant.split('[', 1)}</StCartTitle>
                    </StTicketCard>
                  </Link>
                );
              case '12':
                return (
                  <Link to={`/spot/${data.contentid}`}>
                    <StTicketCard key={i}>
                      <StTicketCardLeft>
                        <StTicketHeader>
                          <StCartMenu>관광지</StCartMenu>
                        </StTicketHeader>

                        <StMyTicketImage src={data.img || noimg} alt="사진" />
                      </StTicketCardLeft>
                      <StCartTitle>{data.restaurant.split('[', 1)}</StCartTitle>
                    </StTicketCard>
                  </Link>
                );
              default:
                return null;
            }
          })}
        </StTicket>
      </StTicketWrap>
    </>
  );
};

export default MyRestaurantLiked;

const StTicketWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const StTicket = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const StTicketCard = styled.div`
  overflow: hidden;
  width: 480.01px;
  height: 172.54px;
  /* margin: 10px; */
  margin: 0 27.36px 18.8px 0;
  /* box-sizing: border-box; */
  border-radius: 11.41px;
  /* padding: 10px; */
  /* display: grid; */
  align-items: center;
  /* flex-direction: column; */
  clear: both;
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-size: contain;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
`;

const StTicketCardLeft = styled.div`
  width: 254px;
  height: 172.54px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const StMyTicketImage = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 11.41px;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.1);
    transition: all 0.35s;
  } */
  /* position: relative; */
  display: flex;

  box-shadow: 5px 5px 10px grey;
  /* opacity: 0.7; */
`;

const StCartTitle = styled.span`
  /* position: absolute; */
  color: #4d4d4d;
  font-weight: 900;
  z-index: 100;
  text-align: center;
  font-size: 19.7px;
  line-height: 18.4px;
  margin: 22.15px 0 0 30.42px;
`;

const StCartMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: rgba(207, 171, 228, 0.4);
  margin: 5px;
`;

const StTicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
`;