import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { styled } from "styled-components";

//ハンバーガーメニュー
export const HamburgerMenu = ({setMain}) => {
    
    /** メニュー開閉用
     *  ハンバーガーメニュー押下時にメニューを開き
     *  ×ボタンを押すと閉じる
    */ 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SButton onClick={toggleMenu}>
                {/** メニューを開いていない状態ではハンバーガーメニューを表示 */}
                {isOpen ? <></> : <GiHamburgerMenu size={30} />}
            </SButton>
            
            {/** メニューを開いている状態では×と各メニューを表示 */}
            {isOpen ? 
                <SNav>
                    <SClose>
                        <MdClose size={24} onClick={() => {setIsOpen(false)}} />
                    </SClose>
                    <SUl>
                        <SLi onClick={() => {setMain('MyPortfolio') ; setIsOpen(false)}}>Home</SLi>
                        <SLi onClick={() => {setMain('Background') ; setIsOpen(false)}}>Background</SLi>
                        <SLi onClick={() => {setMain('Skills') ; setIsOpen(false)}}>Skills</SLi>
                    </SUl>
                </SNav>
                
                : 
                
                <></>
            }
        </>
    );
};

const SButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
`

const SNav = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: transform .5s, opacity .5s;
`
const SClose = styled.div`
    cursor: pointer;
    position: absolute;
    left: 350px;
    top: 40px;
    height: 3px;
    border-radius: 2px;
    width: 45%;
`

const SUl = styled.ul`
    list-style: none;
    padding: 0;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

const SLi = styled.li`
    cursor: pointer;
    color: #333;
    margin: 1rem 0;
    font-size: 24px;
    text-align: left;
    :hover {
        color: #007BFF;
        cursor: pointer;
    }
`