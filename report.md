# Report

## Benchmark

### Scenario

Benchmark duration : **5 minutes**

Concurrent virtual user : **5 vus**

Load type : **soak testing**

### Machines

- Database Machine

  - Location : Singapore
  - RAM : 1 GB
  - CPU : 1 CPU
  - Storage : SSD disk
  - Node : 1

- Client Machine
  - Location : Singapore
  - RAM : 1 GB
  - CPU : 1 CPU
  - Storage : SSD disk

### Variables

- Database

  - Mysql
  - MongoDB
  - Redis

- Method

  - Single row insert
  - Multi row insert

- Item count
  - 20 (±15.38 KB)
  - 200 (±153.8 KB)
  - 2000 (±1538 KB)

## Result

### Average Iteration Duration

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         |                  |                 | n/a                | n/a               | n/a              | n/a             |
| 200        |                  |                 | n/a                | n/a               | n/a              | n/a             |
| 2000       |                  |                 | n/a                | n/a               | n/a              | n/a             |

### Transaction per minute

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         |                  |                 | n/a                | n/a               | n/a              | n/a             |
| 200        |                  |                 | n/a                | n/a               | n/a              | n/a             |
| 2000       |                  |                 | n/a                | n/a               | n/a              | n/a             |
