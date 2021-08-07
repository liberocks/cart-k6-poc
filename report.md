# Report

## Benchmark

### Scenario

Benchmark duration : **120 seconds**

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
  - Redis

- Method

  - Single row insert (all cart items stored in one row)
  - Multi row insert (store each item in separate row)

- Item count (this defines how much item inserted upon every transaction performed)

  - 20 (approximately worth ±15.38 KB data)
  - 200 (approximately worth ±153.8 KB data)
  - 2000 (approximately worth ±1538 KB data)

  ### Metric

  - Average iteration duration : how much time an insert operation takes time
  - Transaction per second : how many transaction achieved for every second

## Result

### Average Iteration Duration

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         | 2.23ms           | 4.59ms          | n/a                | n/a               | 0.3213ms         | 9.95ms          |
| 200        | 11.77ms          | 29.44ms         | n/a                | n/a               | 0.64906ms        | 100.32ms        |
| 2000       | 151.34ms         | 277.16ms        | n/a                | n/a               | 3.87ms           | 869.39ms        |

### Transaction per second

| Item count | Mysql Single Row | Mysql Multi Row | MongoDB Single Row | MongoDB Multi Row | Redis Single Row | Redis Multi Row |
| ---------- | ---------------- | --------------- | ------------------ | ----------------- | ---------------- | --------------- |
| 20         | 2168.25386/s     | 956.335349/s    | n/a                | n/a               | 14809.677281/s   | 500.476699/s    |
| 200        | 409.467149/s     | 143.241219/s    | n/a                | n/a               | 7476.923183/s    | 49.776977/s     |
| 2000       | 31.718439/s      | 14.819381/s     | n/a                | n/a               | 1274.600789/s    | 5.730391/s      |
