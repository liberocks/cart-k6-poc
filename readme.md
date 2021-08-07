# Single Row vs Mutli Row Cart Insert Benchmark

## Setup

- Install golang

```
sudo apt-get install golang-go
```

- Install xk6 cli

```
GOPATH=$(pwd) go install github.com/k6io/xk6/cmd/xk6@latest
```

- Build k6

```
CGO_ENABLED=1 ./bin/xk6 build master \
    --with github.com/imiric/xk6-sql \
    --with github.com/dgzlopes/xk6-redis@latest \
    --with github.com/b1uema/xk6-mongo \
    --output ./bin/k6
```

- Login to k6 via cli

```
./bin/k6 login cloud
```

## Running benchmark

```
 MYSQL_CONNECTION_STRING="<MYSQL_CONNECTION_STRING>" \
 REDIS_ADDRESS="<REDIS_ADDRESS>" \
 REDIS_PASSWORD="<REDIS_PASSWORD>" \
 REDIS_DB="<REDIS_DB>" \
 npm run start
```
