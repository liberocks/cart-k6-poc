import sql from "k6/x/sql";

const ITEM_COUNT = parseInt(__ENV.ITEM_COUNT || "1", 10);
const MYSQL_CONNECTION_STRING = __ENV.MYSQL_CONNECTION_STRING || "root:root@tcp(127.0.0.1:3306)/test";

const db = sql.open("mysql", MYSQL_CONNECTION_STRING);

const generatePayload = (n = 1) => {
  let r = {};
  const payload = `{"EzncMmNbPhadCFvc57bW":{"rYzfUkcOPbSblQgJiDf0":null,"BVfPgVELBKUxd20riv1a":{"zcETOGbQLilVXY6zTOgs":1,"tYhMGUjVKOJflVPgsDfm":5,"3vKSP7h2x3QC1bjO9vxD":20,"pmlhvlnk5D4lpG190lyr":false},"fTd76PD3ZGrpK9XU1FP4":"u39oeoyjXTSDjvt3yaq1","4vijJM0IBvJRvJSKKAWT":4,"tJOmKXsRRxlOk6dCYl3P":{"su2FMlBG0hck3902LTdc":{"RgOZx9dRFWNsAvUFgCaB":289500,"WLNb9pyN1Mq1zlYNbQiT":0.035},"Hs5PdnsKqrkV0OpMdR2d":[]},"OJovNgI0FrDAjB6T1PWL":289500,"MwvC2wbYnYIHgrVZxzIj":{"wPWP7xIEi306Xjv5JeP4":2,"wV59Ta8kMQBg9gGM23G8":"kh2XRqWtaA2KKNEV4Vos","pqLOUzz8xkQbWU4Tml6L":200000},"T5id066p6wE3G9Q8ruSr":0.035,"PMFDsLxhxNU8RRhbMqk3":300000,"WCnASTypMEVMXJj0YVKO":{"WCnASTypMEVMXJj0YVKO":null,"j3GKOTMK5QNnF3CSzXSf":null,"73hMlBrQpdmRgDwcWOh4":false}}}`;

  for (let i = 0; i < n; i++) r[`${i}`] = JSON.parse(payload);

  return JSON.stringify(r);
};

const script = `INSERT INTO cart (market_id,pharmacy_id,items,created_at,updated_at,deleted_at) VALUES('abc',1,'${generatePayload(ITEM_COUNT)}','2021-04-29 00:00:00.0','2021-04-29 01:23:45.0',NULL);`;

export function setup() {
  db.exec(`
    CREATE TABLE  IF NOT EXISTS cart (
      id int(11) NOT NULL AUTO_INCREMENT,
      market_id varchar(32) DEFAULT NULL,
      pharmacy_id int(11) DEFAULT NULL,
      items json DEFAULT NULL,
      created_at datetime DEFAULT NULL,
      updated_at datetime DEFAULT NULL,
      deleted_at datetime DEFAULT NULL,
      PRIMARY KEY (id)    
    );
  `);
}

export function teardown() {
  db.exec("DELETE FROM cart;");
  db.exec("DROP TABLE cart;");
  db.close();
}

export default function () {
  db.exec(script);
}
