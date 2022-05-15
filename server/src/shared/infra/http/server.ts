import { config } from 'dotenv-flow';

import { app } from './app';
import api from '../../../config/api';

config({ silent: true });

const apiConfig = api();

app.listen(apiConfig.PORT || 3333, async () => {
  console.log(`SERVER STARTED ON http://localhost:${apiConfig.PORT}`);
});
