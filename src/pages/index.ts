import { lazy } from 'react';
// import MainPage from './MainPage';
// import LoginPage from './LoginPage';
// import PurchasePage from './PurchasePage';
// import MapPage from './MapPage';
// import ReservationPage from './ReservationPage';
// import DetailPage from './DetailPage';
// import MyPage from './MyPage';
// import SearchPage from './SearchPage';
// import SignUpPage from './SignUpPage';
// import StayDetailPage from './StayDetailPage';
// import RestaurantDetailPage from './RestaurantDetailPage';
// import Ticketing from '../components/Reservation/Ticketing';

const MainPage = lazy(() => import('./MainPage'));
const LoginPage = lazy(() => import('./LoginPage'));
const DetailPage = lazy(() => import('./DetailPage/DetailPage'));
const PurchasePage = lazy(() => import('./PurchasePage'));
const MapPage = lazy(() => import('./MapPage'));
const ReservationPage = lazy(() => import('./ReservationPage'));
const MyPage = lazy(() => import('./MyPage'));
const SearchPage = lazy(() => import('./SearchPage'));
const SignUpPage = lazy(() => import('./SignUpPage'));
const StayDetailPage = lazy(() => import('./DetailPage/StayDetailPage'));
const RestaurantDetailPage = lazy(() =>
  import('./DetailPage/RestaurantDetailPage'),
);

export {
  MainPage,
  LoginPage,
  ReservationPage,
  PurchasePage,
  MapPage,
  DetailPage,
  MyPage,
  SearchPage,
  SignUpPage,
  StayDetailPage,
  RestaurantDetailPage,
};
