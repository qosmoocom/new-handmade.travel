import Image from "next/image";
import { useSelector } from "react-redux";
import styled from "styled-components";
import gif from "./airplane.gif";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 21;

  /* no-active */
  opacity: 0;
  transition: all 0.6s;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 2000;
  }
`;
export default function Loader() {
  const { loading } = useSelector((state) => state.loader);
  return (
    <Wrapper className={loading ? "active" : "no-active"}>
      <Image src={gif} width={150} height={150} />
    </Wrapper>
  );
}
