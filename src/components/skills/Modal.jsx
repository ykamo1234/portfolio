import { styled } from "styled-components"
import { MdClose } from 'react-icons/md';

export const Modal = ({ isShow, setIsShowModal, modalContent }) => {

    if (isShow) {
        return (
            <SModal>
                <SModalContent>
                    <SClose>
                        <MdClose size={24} onClick={() => { setIsShowModal(false) }}></MdClose>
                    </SClose>
                    <SOuter>
                        <div>{modalContent}</div>
                    </SOuter>
                </SModalContent>
            </SModal>
        )
    } else {
        return null;
    }
}

const SModal = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const SModalContent = styled.div`
    @media screen and (width < 1024px) {
        font-size: 4vw;
    }
    z-index:2;
    width: 70%;
    height: 70%;
    max-height: 70%;
    padding: 1em;
    background: #fffff4;
    display: flex;
    flex-direction: column;
`

const SClose = styled.div`
    cursor: pointer;
    position: sticky;
    top: 0;
    height: 0;
    text-align: right;
`

const SOuter = styled.div`
    position: relative;
    width: 80%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`