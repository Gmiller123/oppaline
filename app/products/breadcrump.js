import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

const BreadcrumbsComp = () => {
  return (
    <Breadcrumbs className="pt-5" aria-label="breadcrumb">
      <Link
        className="hover:text-black/80 hover:underline"
        href="/"
        color="inherit"
      >
        Home
      </Link>
      <Link
        className="text-black/80"
        href="/products"
        underline="hover"
        color="inherit"
      >
        Product
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;
