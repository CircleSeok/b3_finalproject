import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import {
  MainPage,
  LoginPage,
  ReservationPage,
  MyPage,
  DetailPage,
  MapPage,
  PurchasePage,
  CommunicationPage,
  SignUpPage,
  SearchPage,
  StayDetailPage,
  RestaurantDetailPage,
  ChatBotModal,
  Ticketing,
} from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <ChatBotModal />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/spot/:id" element={<DetailPage />} />
          <Route path="/spot/:id/map" element={<MapPage />} />
          <Route path="/stay/:id" element={<StayDetailPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
          {/* <Route path="/reservation" element={<ReservationPage />} /> */}
          <Route path="/stay/:id/reservation" element={<ReservationPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          {/* <Route path="/ticket" element={<Ticketing />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
