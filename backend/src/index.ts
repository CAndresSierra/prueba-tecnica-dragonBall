import server from "./server";
import { PORT } from "./config/envs";
import dbConfig from "./config/dbConfig";
import * as seedDta from "./utils/preloadDta";

const InitializeApp = async () => {
  await dbConfig();
  await seedDta.preloadCharacters();
  await seedDta.preloadPlanets();
  await seedDta.preloadTransformations();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

InitializeApp();
