import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const BreadcrumbsComp = () => {
  return (
    <Breadcrumbs className="pt-5" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Product
      </Link>
      <Typography color="text.primary">Shoes</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;
