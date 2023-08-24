import { useState } from "react";
import { Header } from "./common/Header"
import { Home } from "./home/Home";
import { BackgroundMain } from "./background/BackgroundMain";
import { Skills } from "./skills/Skills";

export const Main = () => {

    /**
     * コンテンツ表示切り替え用state
     * mainの値によってコンテンツを切り替え
     * 切り替えるトリガーはヘッダーのメニューをクリックした時で
     * setMain関数を呼び出しmainの値を変更する
     */
    const [main, setMain] = useState('MyPortfolio');

    // 一番最初に表示されるホーム画面
    if (main === 'MyPortfolio') {
        return (
            <>
                <Header main={main} setMain={setMain} />
                <Home />
            </>
        )
    // 経歴画面
    } else if (main === 'Background') {
        return (
            <>
                <Header main={main} setMain={setMain} />
                <BackgroundMain />
            </>
        )
    // スキルセット画面
    } else {
        return (
            <>
                <Header main={main} setMain={setMain} />
                <Skills />
            </>
        )
    }

}