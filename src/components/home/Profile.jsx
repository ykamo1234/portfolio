import { styled } from "styled-components"

// プロフィール
export const Profile = () => {
    return (
        <SMain>
            鴨志田優人(Yuto Kamoshida)
            <br />
            <br />
            1995年6月14日生まれの28歳。社会人4年目。
            <br />
            <br />
            文系大学出身。卒業後は金融系SIerに就職。
            <br />
            <br />
            バックエンド、インフラ領域中心に設計、開発、テストを担当。
            <br />
            <br />
            E-Mail：<a href="yuto.kamo1403@gmail.com">yuto.kamo1403@gmail.com</a>
            <br />
            <br />
            github：<a href="https://github.com/ykamo1234">https://github.com/ykamo1234</a>
        </SMain>
    )
}

const SMain = styled.div`
    padding: 2%;
`