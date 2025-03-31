const { envs } = require("./config/env");
const { startServer } = require("./server/server");
const main = () => {
  startServer({
    port: envs.PORT,
    public: envs.PUBLIC_PATH,
  });
  console.log(envs);
};
// Función agnóstica autoconvocada
// Agnóstica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
  main();
})();
