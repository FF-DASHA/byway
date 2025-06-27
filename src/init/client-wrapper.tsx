"use client"; 
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface TypePropsClientWrapper {
  children: React.ReactNode;
}

const ClientWrapper = ({ children }: TypePropsClientWrapper) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientWrapper;
