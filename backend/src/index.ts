import server from "./server";
import { PORT } from "./config/envs";
import dbConfig from "./config/dbConfig";
import {
  preloadCharacters,
  preloadPlanets,
  preloadTransformations,
} from "./utils/preloadDta";

const InitializeApp = async () => {
  await dbConfig();
  await preloadCharacters();
  await preloadPlanets();
  await preloadTransformations();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

InitializeApp();
