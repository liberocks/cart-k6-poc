import redis from "k6/x/redis";
import { Counter } from "k6/metrics";

let counter = new Counter("counter");

const ITEM_COUNT = parseInt(__ENV.ITEM_COUNT || "1", 10);
const REDIS_ADDRESS = __ENV.REDIS_ADDRESS || "localhost:6379";
const REDIS_PASSWORD = __ENV.REDIS_PASSWORD || "";
const REDIS_DB = __ENV.REDIS_DB || "";
const INDEX_RANGE = 100;

const client = redis.newClient(REDIS_ADDRESS, REDIS_PASSWORD, REDIS_DB);

const generatePayload = (n = 1) => {
  let r = {};
  const payload = `{"EzncMmNbPhadCFvc57bW":{"rYzfUkcOPbSblQgJiDf0":null,"BVfPgVELBKUxd20riv1a":{"zcETOGbQLilVXY6zTOgs":1,"tYhMGUjVKOJflVPgsDfm":5,"3vKSP7h2x3QC1bjO9vxD":20,"pmlhvlnk5D4lpG190lyr":false},"fTd76PD3ZGrpK9XU1FP4":"u39oeoyjXTSDjvt3yaq1","4vijJM0IBvJRvJSKKAWT":4,"tJOmKXsRRxlOk6dCYl3P":{"su2FMlBG0hck3902LTdc":{"RgOZx9dRFWNsAvUFgCaB":289500,"WLNb9pyN1Mq1zlYNbQiT":0.035},"Hs5PdnsKqrkV0OpMdR2d":[]},"OJovNgI0FrDAjB6T1PWL":289500,"MwvC2wbYnYIHgrVZxzIj":{"wPWP7xIEi306Xjv5JeP4":2,"wV59Ta8kMQBg9gGM23G8":"kh2XRqWtaA2KKNEV4Vos","pqLOUzz8xkQbWU4Tml6L":200000},"T5id066p6wE3G9Q8ruSr":0.035,"PMFDsLxhxNU8RRhbMqk3":300000,"WCnASTypMEVMXJj0YVKO":{"WCnASTypMEVMXJj0YVKO":null,"j3GKOTMK5QNnF3CSzXSf":null,"73hMlBrQpdmRgDwcWOh4":false}}}`;

  for (let i = 0; i < n; i++) r[`${i}`] = JSON.parse(payload);

  return JSON.stringify(r);
};

const randomInteger = () => {
  return Math.floor(Math.random() * INDEX_RANGE);
};

const prefix = "CART/";
const payload = generatePayload(ITEM_COUNT);

export function setup() {
  for (let i = 0; i < INDEX_RANGE; i++) redis.del(client, `${prefix}${i}`);
}

export function teardown() {
  for (let i = 0; i < INDEX_RANGE; i++) redis.del(client, `${prefix}${i}`);
}

export default function () {
  redis.set(client, `${prefix}${randomInteger()}`, payload);
}
