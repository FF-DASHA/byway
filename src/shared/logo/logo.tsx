"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "./logo.png";

const Logo: FunctionComponent = () => {
  return <Image src={logo} alt="logo" />;
};

export default Logo;
