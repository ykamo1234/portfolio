import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

export const Background = ({
    cafeImage,
    text,
    head,
    middleHeader
}) => {
    return (
        <SCard>
            <SContainer>
                <SImg alt="Cafe image" src={cafeImage} />
                    <SFrame>
                        <SHead>{head}</SHead>
                        <SMiddleHead>{middleHeader}</SMiddleHead>
                        <SElement>{text}</SElement>
                    </SFrame>
            </SContainer>
        </SCard>
    );
};

Background.propTypes = {
    cafeImage: PropTypes.string,
    text: PropTypes.string,
    head: PropTypes.string,
    middleHeader: PropTypes.string,
};

const SCard = styled.div`
    padding: 1%;
    margin: 2% 2% 10%;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
`

const SContainer = styled.div`
    @media screen and (width < 1024px) {
        flex-direction: column;
    }
    gap: 2vw;
    margin: 5% 5% 5% 5%;
    display: flex;
    align-items: center;
`
const SImg = styled.img`
    @media screen and (width < 1024px) {
        width: 80%;
        height: 80%;
    }
    width: 40%;
    height: 40%;
`
const SFrame = styled.div`
    @media screen and (width < 1024px) {
        align-items: center;
    }
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
`
const SHead = styled.div`
    @media screen and (width < 1024px) {
        font-size: 4vw;
        padding: 3%;
    }
    // max-width: 80%;
    position: static; 
    font-family: Inter;
    font-weight: 400;
    font-size: 2vw;
`

const SMiddleHead = styled.div`
    @media screen and (width < 1024px) {
        padding: 0% 3% 5% 3%;
        font-size: 4vw;
    }
    padding: 5% 3% 5% 3%;
    font-size: 1.5vw;
    color: red;
    text-decoration:underline;
`

const SElement = styled.div`
    @media screen and (width < 1024px) {
        font-size: 3.5vw;
    }
    padding: 0% 3% 0%;
    // max-width: 80%;
    font-family: "Inter", Helvetica;
    font-size: 1vw;
    display: flex;
    align-items: center; 
    word-wrap: break-word;;
`
