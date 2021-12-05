import express from "express";
import router from "./router/";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
const servidor = express();

servidor.use(bodyParser.json());
servidor.use(cors());

servidor.use(morgan("dev"));
servidor.use(
  express.json({
    limit: "50mb",
  })
);
servidor.use(
  express.urlencoded({
    limit: "50mb",
  })
);
servidor.use(router);

servidor.listen(5001, () => {
  console.log("Felicidades, Iniciaste tu primer servidor");
});
