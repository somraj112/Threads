import { GoHomeFill } from "react-icons/go";
import { Stack } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <GoHomeFill size={32} />
        <IoIosSearch size={32} />
        <TbEdit size={32} />
        <CiHeart size={32} />
        <RxAvatar size={32} />
      </Stack>
    </>
  );
};
export default Navbar;
