import React from "react";
import { Layout } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";
import CartList from "../Components/CartList";

const { Content } = Layout;

function CartView() {
  return (
    <div>
      <HeaderInfo />
      <Layout>
        <Layout>
          <SideBar />
          <Content>
            <h3>My Shopping Cart</h3>
            <SearchBar />
            <CartList />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default CartView;
