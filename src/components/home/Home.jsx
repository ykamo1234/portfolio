import { styled } from "styled-components";
import { Profile } from "./Profile";
import iam from "../../images/iam.jpg";

// ホーム画面
export const Home = () => {
    return (
        <>
            <SMain>
                <SImg src={iam} />
                <SBody>
                    <Profile />
                </SBody>
            </SMain>
        </>
    )
}

/**
 * PC以上の画面の場合は写真とコンテンツを横並びに
 * PCより小さい画面の場合は写真とコンテンツを縦並びに
 *  */
const SMain = styled.div`
    @media screen and (width < 1024px) {
        margin: 5% 10% 5% 10%;
        gap: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (1024px <= width) {
        margin: 5% 5% 5% 5%;
        gap: 5%;
        display: flex;
        align-items: stretch;
    }
    justify-content: space-around;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
`

const SImg = styled.img`
    padding: 2%;
    @media screen and (width < 1024px) {
        width: 60%;
    }
    @media screen and (1024px <= width) {
        width: 40%;
    }
`

const SBody = styled.div`
    @media screen and (width < 1024px) {
        padding: 3% 0% 3%;
        font-size: 4vw;
        align-items: flex-start;
        width: 80%;
    }
    @media screen and (1024px <= width) {
        padding: 3% 3% 3%;
        font-size: 1.2vw;
        align-items: center; 
    }
    display: flex;
    color: black;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
    width: 100%;
`
