/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function BackArrow({ pathname, userInfo }) {
  return (
    <>
      <Link
        href={{
          pathname: pathname,
          query: { userInfo: JSON.stringify(userInfo) },
        }}
      >
        <a>
          <ArrowForwardIosIcon />
        </a>
      </Link>
    </>
  );
}
