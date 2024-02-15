import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const BreadcrumbsLink = () => {
  return (
    <div>
      <Breadcrumbs className="pt-5" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Typography color="text.primary">Lehenga</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsLink;
