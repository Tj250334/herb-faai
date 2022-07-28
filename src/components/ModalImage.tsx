import React, { useState } from "react";
import styled from "styled-components";
// import Pic from "./img_snow.jpg";
import { MdDelete, MdOutlineClose } from "react-icons/md";

import {
  herbImage,
  useDeleteHerbImgMutation,
} from "../contexts/features/thaiherb/thaiherb-api-slice";

interface Props {
  herbimg: herbImage;
}

const ModalImage: React.FC<Props> = ({ herbimg }) => {
  // const pic = "http://thaiherb.thddns.net:4661/image/" + herbimg.image
  const pic = "http://localhost:3333/image/" + herbimg.image;

  const [deleteHerbImg] = useDeleteHerbImgMutation();
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(true);
  };
  const handleClickClose = () => {
    setPopup(false);
  };

  const handlerDelete = async () => {
    await deleteHerbImg(herbimg);
  };
  const handleClickDelete = () => {
    handlerDelete();
  };

  return (
    <Container>
      <Image src={pic} onClick={handleClick} />
      <Modal popup={popup}>
        <IconTopRight onClick={handleClickClose}>
          <MdOutlineClose />
        </IconTopRight>

        <IconBottomRight onClick={handleClickDelete}>
          <MdDelete />
        </IconBottomRight>

        <ModalContent src={pic} />
        {/* <Caption>Snow</Caption> */}
      </Modal>
    </Container>
  );
};

export default ModalImage;

const Container = styled.div`
  padding: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 35px;
`;

const Image = styled.img`
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  /* width: 100%; */
  height: 150px;
  max-width: 300px;

  &:hover {
    opacity: 0.7;
  }
`;

interface StyledProps {
  readonly popup: boolean;
}

const Modal = styled.div<StyledProps>`
  display: ${({ popup }) => (popup ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
`;

const ModalContent = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;

  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Caption = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;

  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const IconTopRight = styled.div`
  position: absolute;
  top: 15px;
  right: 35px;

  color: #fff;
  margin-right: 25px;
  margin-bottom: 25px;

  /* border: 1px solid red; */
  font-size: 40px;
  transition: 0.3s;
  cursor: pointer;
`;

const IconBottomRight = styled.div`
  position: absolute;
  bottom: 15px;
  right: 35px;

  color: #fff;
  margin-right: 25px;
  margin-bottom: 25px;

  /* border: 1px solid red; */
  font-size: 40px;
  transition: 0.3s;
  cursor: pointer;
`;
