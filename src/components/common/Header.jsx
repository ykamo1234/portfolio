import { styled } from "styled-components"
import { HamburgerMenu } from "./HamburgerMenu";

//全画面共通ヘッダー
export const Header = (props) => {

    return (
        <STop>
            {/** トップに表示する文字　MyPortfolioなど setMain関数で指定 */}
            <SMain>{props.main}</SMain>
            {/** PC用 */}
            <SMainMenu>
                <SMenu onClick={() => props.setMain('MyPortfolio')}>Home</SMenu>
                <SMenu onClick={() => props.setMain('Background')}>Background</SMenu>
                <SMenu onClick={() => props.setMain('Skills')}>Skills</SMenu>
            </SMainMenu>
            {/** スマホ用 */}
            <SHamburger>
                <HamburgerMenu setMain={props.setMain} />
            </SHamburger>
        </STop>
    )
}

//ヘッダのサイズ指定
const STop = styled.div`
    @media screen and (width < 1024px) {
        width: auto;
        gap: 20vw;
        padding: 2% 2% 5% 2%;
        display: flex;
        justify-content: space-around;
    }
    @media screen and (1024px < width) {
        width: auto;
        padding: 5% 5% 5% 5%;
        gap: 20vw;
        display: flex;
        justify-content: flex-start;
    }
    display: flex;
    align-items: center;
`

const SMain = styled.div`
    @media screen and (width < 1024px) {
        font-size: 8vw;
    }
    @media screen and (1024px < width) {
        font-size: 5vw;
    }
    //flex: 1 1 0;
    align-self: stretch;
    color: black;
    font-family: Raleway;
    font-weight: 400;
    word-wrap: break-word;
`

// メニュー表示（PCで表示　PCより小さいサイズはハンバーガーメニュー）
const SMainMenu = styled.div`
    @media screen and (width < 1024px) {
        gap: 15%;
        display: none;
    }
    @media screen and (1024px < width) {
        width: 50%;
    }
    justify-content: space-around;
    align-items: flex-start;
    display: flex
`

const SMenu = styled.div`
    @media screen and (width < 1024px) {
        font-size: 3vw;
    }
    @media screen and (1024px < width) {
        font-size: 2vw;
        margin: 2%;
    }
    cursor: pointer;
    text-align: center;
    color: black;
    font-family: raleway;
    font-weight: 400px;
    word-wrap: break-word;
`

// メニュー表示（PCより小さいサイズで表示　PCより大きいサイズは通常メニュー）
const SHamburger = styled.div`
    @media screen and (1024px < width) {
        display: none;
    }
`