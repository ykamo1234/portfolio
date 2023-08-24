export const ModalContents = new Map();

export const modalSkills = {
    java: 'Java',
    python : 'Python',
    javascript : 'JavaScript',
    typescript : 'TypeScript',
    react : 'React',
    postgreSQL : 'PostgreSQL',
    mySQL : 'MySQL',
    dynamoDB : 'DynamoDB',
    nginx : 'Nginx',
    wildfly : 'WildFly',
    tomcat : 'Tomcat',
    linux : 'Linux',
    aws : 'AWS',
    docker : 'Docker',
    git : 'Git',
}

ModalContents.set(modalSkills.java,
    <>
        実務での実装経験があり、本番での稼働実績あり。
        <br />
        <br />
        基本的なI/O処理や数理演算に加えマルチスレッドやラムダ式等の実装も可能。
        <br />
        <br />
        他者のコードレビューについても可能。
    </>
)

ModalContents.set(modalSkills.python, 
    <>
        実務での実装経験あり。基本的な実装が可能。
        <br />
        <br />
        自己学習にてAWS Lambdaと組み合わせたスクリプトの作成経験もあり。
    </>
)

ModalContents.set(modalSkills.javascript, 
    <>
        自己学習にて実装経験あり。基本的な実装が可能。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.typescript, 
    <>
        基本的な概念レベルでの理解。
        現在学習中。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.react, 
    <>
        自己学習にて実装経験あり。
        バックエンドと接続したCRUDアプリの実装が可能。
        <br />
        <br />
        なお当サイトについてもReactで実装している。
    </>
)

ModalContents.set(modalSkills.postgreSQL, 
    <>
        実務での実装経験あり。
        基本的なSQL文の操作が可能。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.mySQL, 
    <>
        自己学習にて実装経験あり。
        基本的なSQL文の操作が可能。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.dynamoDB, 
    <>
        自己学習にて実装経験あり。
        基本的なCRUDの操作が可能。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.nginx, 
    <>
        リバースプロキシサーバとして
        実務での実装経験あり。
        <br />
        <br />
    </>
)

ModalContents.set(modalSkills.wildfly, 
    <>
        実務での実装経験あり。
        <br />
        Ear、WarのデプロイやDB接続やEJB通信等基本的な設定が可能。
        <br />
    </>
)

ModalContents.set(modalSkills.tomcat, 
    <>
        自己学習にて実装経験あり。
        <br />
        WarのデプロイやDBとの接続設定等基本的な設定が可能。
        <br />
    </>
)

ModalContents.set(modalSkills.linux, 
    <>
        実務での開発経験あり。
        <br />
        基本的なコマンド（cd, mkdir, rm, find, awk等）の使用が可能。
        <br />
        また実務にてShellScriptの実装経験あり。
        <br />
    </>
)

ModalContents.set(modalSkills.aws, 
    <>
        実務での開発経験あり。
        <br />
        主なサービスを使用が可能。
        <br />
        EC2、ECS、Lambda、ALB、NLB、API Gateway
        <br />
        RDS、DynamoDB、S3、CloudFront
        <br />
        CodePipeline、CodeCommit、CodeBuild、CodeDeploy
        <br />
    </>
)

ModalContents.set(modalSkills.docker, 
    <>
        実務での開発経験あり。
        <br />
        概念の理解とDockerfileの実装が可能。
        <br />
        また、コンテナの基本的な操作についても可能。
    </>
)

ModalContents.set(modalSkills.git, 
    <>
        実務での開発経験あり。
        <br />
        Git-Flowに則った開発が可能。
        <br />
    </>
)
