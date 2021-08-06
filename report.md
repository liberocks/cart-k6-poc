# Report

## Benchmark

### Scenario

Benchmark duration : **60 seconds**

Concurrent virtual user : **5 vus**

Load type : **soak testing**

### Machines

- Database Machine

  - Location : local (docker)
  - RAM : 16 GB
  - CPU : 8 CPU
  - Storage : 1 TB HDD
  - Node : 1

- Client Machine
  - Location : local (docker)
  - RAM : 16 GB
  - CPU : 8 CPU
  - Storage : 1 TB HDD

### Variables

- Database

  - Mysql
  - MongoDB (TODO)
  - Redis (TODO)

- Method

  - Single row insert (all cart items stored in one row)
  - Multi row insert (store each item in separate row)

- Item count (this defines how much item inserted upon every transaction performed)
  - 20 (approximately worth ±15.38 KB data)
  - 200 (approximately worth ±153.8 KB data)
  - 2000 (approximately worth ±1538 KB data)

## Result

### Average Iteration Duration

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         | 3.65ms           | 4.59ms          | n/a                | n/a               | n/a              | n/a             |
| 200        | 20.97ms          | 29.89ms         | n/a                | n/a               | n/a              | n/a             |
| 2000       | 180.49ms         | 273.37ms        | n/a                | n/a               | n/a              | n/a             |

### Transaction per second

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         | 1317.129006/s    | 960.701382/s    | n/a                | n/a               | n/a              | n/a             |
| 200        | 230.998883/s     | 142.352077/s    | n/a                | n/a               | n/a              | n/a             |
| 2000       | 26.622743/s      | 15.036897/s     | n/a                | n/a               | n/a              | n/a             |
