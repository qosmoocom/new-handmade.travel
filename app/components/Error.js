import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Full_screen = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    border: none;
    outline: none;
    font-size: 20px;
    padding: 5px 15px;
    font-weight: 600;
    a {
      color: black;
    }
  }
`;

const Error404 = () => {
  return (
    <>
      <Full_screen>
        <Image
          objectFit="cover"
          layout="intrinsic"
          width={300}
          height={300}
          src="/images/landing/gastro/404.png"
        />
        <h1>404 Error</h1>
        <button>
          <Link href="/">www.handmade.travel</Link>
        </button>
      </Full_screen>
    </>
  );
};

export default Error404;
