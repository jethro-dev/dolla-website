import React from "react";
import { Button } from "../../globalStyles";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoSection.styled";

import { NavBtnLink } from "../Navbar/Navbar.styled";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  primary,
  dark,
  dark2,
  btnPrimary,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightText={lightText}>{description}</Subtitle>
              <BtnWrap>
                <NavBtnLink primary={btnPrimary} to="/signin">
                  {buttonLabel}
                </NavBtnLink>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
