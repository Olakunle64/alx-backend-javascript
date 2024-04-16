import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint); // 1
console.log(weakMap.get(endpoint));

queryAPI(endpoint); // 2
console.log(weakMap.get(endpoint));

queryAPI(endpoint); // 3
queryAPI(endpoint); // 4
queryAPI(endpoint); // 5
queryAPI(endpoint);