import { styled } from "styled-components";
import { Background } from "./Background";
import startJobImage from "../../images/startJob.jpeg";
import engagingJobImage from "../../images/engagingJob.jpg";
import checkImage from "../../images/check.png";
import userbilityImage from "../../images/userbility.png";
import complexImage from "../../images/complex.jpg";

// 経歴（メイン）
export const BackgroundMain = () => {
    return (
        <SIndex>
            <SHeader>職務履歴</SHeader>
            <SContents>
                <Background
                    cafeImage={startJobImage}
                    text={
                        <>
                            文系出身でモノづくりができるIT系を軸に就職活動。
                            <br />
                            <br />
                            人の生活に寄り添った生命保険とITに強みを持つ現職に就職。
                            <br />
                            <br />
                            入社1年目は研修を中心にJavaを習得。
                        </>
                    }
                    head="2020年（現職に入社）"
                    middleHeader="文系出身でモノづくりへ挑戦！"
                />
                <Background
                    cafeImage={engagingJobImage}
                    text={
                        <>
                            生命保険会社向けのシステム開発を経験。
                            <br />
                            <br />
                            主にインフラ～ミドル層中心にアプリ開発の経験を積む。
                            <br />
                            <br />
                            Linux、AWSのインフラ技術の習得や
                            Python、Javaなどの言語を使用したアプリ開発を経験。
                        </>
                    }
                    head="2021年～2023年（入社2年目～4年目）"
                    middleHeader="様々なIT技術を身に着ける！"
                />
            </SContents>
            <SHeader>転職の動機</SHeader>
            <SContents>
                <Background
                    cafeImage={checkImage}
                    text={
                        <>
                            現職で求められるのは確実性。
                            <br />
                            <br />
                            生命保険を利用する何百万人に影響するシステムを開発しているため確実性が重要視される。
                            <br />
                            <br />
                            そのため稼働実績のある10年以上前のソースコードが未だに使用されているなど実績が重要視され最新技術への関心が薄い。
                            <br />
                            <br />
                            この状況に危機を感じ、最新の技術を使用している環境に身を置き、変化に対応できる人材になりたい。
                        </>
                    }
                    head="転職を志した動機①"
                    middleHeader="変化に対応できる人材になりたい！"
                />
                <Background
                    cafeImage={userbilityImage}
                    text={
                        <>
                            現職では保険会社の事務員が使用するシステムを開発しているが、実際に使われている場面を目にしていないためシステムがどう使われているか実感が湧きにくい。
                            <br />
                            <br />
                            そうした環境にいる中で、ユーザーの反応が見たいという視点が強くなり、サービス志向のエンジニアになりたいと感じるようになった。
                        </>
                    }
                    head="転職を志した動機②"
                    middleHeader="ユーザー目線で開発したい！"
                />
                <Background
                    cafeImage={complexImage}
                    text={
                        <>
                            現職ではシステムの規模が大きくシステムの全体感の把握が困難。事実、エラー発生時システム全体を把握していないと対処ができない局面があった。
                            <br />
                            <br />
                            そうした場面を経験しシステムの全体感の理解が重要であると気づいた。
                            <br />
                            <br />
                            また、複数のチームで開発しているため、情報収集に時間を要するなど動きが遅くなっている。
                            <br />
                            <br />
                            このような状況からシステム全体を把握できる小、中規模のシステムを開発してみたい。
                        </>
                    }
                    head="転職を志した動機③"
                    middleHeader=" 小、中規模のシステムを開発したい！"
                />
            </SContents>
        </SIndex>
    )
}

const SIndex = styled.div`
    background-color: #fffff4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
    
const SHeader = styled.div`
    @media screen and (width < 1024px) {
        font-size: 6vw;
    }
    font-family: Inter;
    font-size: 4vw;
    text-align: center;
`
    
const SContents = styled.div`
    @media screen and (width < 1024px) {
        width: 90%;
    }
    width: 60%;
`
