/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function BackArrow({ pathname, userInfo }) {
  console.log(pathname);
  return (
    <>
      <Link
        href={{
          pathname: pathname,
          query: { userInfo: JSON.stringify(userInfo) },
        }}
      >
        <a>
          <ArrowBackIosIcon />
        </a>
      </Link>
    </>
  );
}
