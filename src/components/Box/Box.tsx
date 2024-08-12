"use client"
import styled from "styled-components";


interface BoxProps {
    padding?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingX?: string;
    paddingY?: string;
    pt?: string;
    pr?: string;
    pb?: string;
    pl?: string;
    py?: string;
    px?: string;

    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginX?: string;
    marginY?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
    my?: string;
    mx?: string

    width?: string;
    height?: string;
}


const Box = styled.div<BoxProps>`
  /* Padding */
  padding: ${({ padding }) => padding || '0'};
  padding-top: ${({ pt, py, paddingTop }) => pt || py || paddingTop || '0'};
  padding-right: ${({ pr, px, paddingRight }) => pr || px || paddingRight || '0'};
  padding-bottom: ${({ pb, py, paddingBottom }) => pb || py || paddingBottom || '0'};
  padding-left: ${({ pl, px, paddingLeft }) => pl || px || paddingLeft || '0'};

  /* Margin */
  margin: ${({ margin }) => margin || '0'};
  margin-top: ${({ mt, my, marginTop }) => mt || my || marginTop || '0'};
  margin-right: ${({ mr, mx, marginRight }) => mr || mx || marginRight || '0'};
  margin-bottom: ${({ mb, my, marginBottom }) => mb || my || marginBottom || '0'};
  margin-left: ${({ ml, mx, marginLeft }) => ml || mx || marginLeft || '0'};
`;

export default Box;
