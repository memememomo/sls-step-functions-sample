# Serverless Framework で Step Functions を設定するサンプル



## AWS API キーの設定

`aws-credentials` に AWS の API キーを設定します。

```
$ cp aws-credentials.sample aws-credentials
```

## Docker のビルド

```
$ docker-compose build
```

## デプロイ
　
```
$ docker-compose run sls sls deploy
```
