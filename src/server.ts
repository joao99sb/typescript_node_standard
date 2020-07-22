// yarn tsc --init
// configurar o tsconfig.josn
// yarn add ts-node-dev -D
// yarn add eslint -D
// yarn eslint --init
// yarn add -D eslint-import-resolver-typescript
// mexer no  .eslintrc.json
// yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
// mexer no .eslintrc.json

import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => console.log('oi'));
