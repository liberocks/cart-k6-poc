import sql from "k6/x/sql";
import { check } from "k6";

export let options = {
  stages: [
    { duration: "5s", target: 10 }, // simulate ramp-up of traffic from 1 to 50 users over 5 seconds.
    { duration: "10s", target: 10 }, // stay at 50 users for 10 seconds
    { duration: "5s", target: 0 }, // ramp-down to 0 users
  ],
};

const db = sql.open("sqlite3", "./test.db");

export function setup() {
  db.exec(`CREATE TABLE IF NOT EXISTS person (
           id integer PRIMARY KEY AUTOINCREMENT,
           email varchar NOT NULL,
           first_name varchar,
           last_name varchar);`);
}

export function teardown() {
  db.exec("DELETE FROM person;");
  db.exec("DROP TABLE person;");
  db.close();
}

export default function () {
  let result = db.exec(
    "INSERT INTO person (email, first_name, last_name) VALUES('${randomstring()}', '${randomstring()}', '${randomstring()}');"
  );

  check(result, { "is truthy": (r) => !!r });
}
