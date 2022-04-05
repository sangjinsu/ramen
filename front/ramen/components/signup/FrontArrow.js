/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as React from "react";
import Button from "@mui/material/Button";

export default function BackArrow({ pathname, userInfo }) {
  return (
    <>
      <Link
        href={{
          pathname: pathname,
          query: { userInfo: JSON.stringify(userInfo) },
        }}
      >
        <Button
          style={{
            color: "orange",
            border: "1px solid orange",
            float: "right",
          }}
          variant="outlined"
          fontSize="large"
          endIcon={<ArrowForwardIosIcon />}
        >
          NEXT
        </Button>
      </Link>
    </>
  );
}
