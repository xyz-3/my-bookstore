import React, { useState, useEffect } from "react";
import {useLocation, useNavigate, useOutletContext} from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import Footer from "../Components/Footer";
import {getAllBooks} from "../services/bookService";
import UserHomeView from "./userView/UserHomeView";
import StorageView from "./adminView/StorageView";

const { Content } = Layout;

function HomeView(props) {
  // const [list, setList] = useState([]);
  // const userInfo = useOutletContext();

  const userInfo = localStorage.getItem("user");
  const is_admin = (userInfo === "undefined") ? false : JSON.parse(userInfo).role;

  // const location = useLocation();
  // const current = location.pathname;

  // useEffect(() => {
  //   const endpoint = "http://localhost:8080/api/books";
  //   function callback (data) {
  //     setList(data);
  //   }
  //   getAllBooks(endpoint, callback);
  // }, []);



  function filterBook(){}

  // return (
  //   <div className="View">
  //     <HeaderInfo searchClick={filterBook} userInfo={userInfo} />
  //     <Layout className="middle-part">
  //       <Layout className="body">
  //         <SideBar cur_key={current} />
  //         <Content>
  //           <BookCarousel />
  //           <BookList books={list} />
  //         </Content>
  //       </Layout>
  //     </Layout>
  //     <Footer />
  //   </div>
  // );
  return (
      is_admin ?
      <StorageView /> : <UserHomeView />
  )
}

export default HomeView;
