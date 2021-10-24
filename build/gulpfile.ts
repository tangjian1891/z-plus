// 串行和并行

import { series, parallel } from "gulp";
import { run, withTaskName } from "./utils/index";

export default series(
  withTaskName("clearn", async () => {
    console.log("执行了");
    run("rm -rf ./dist");
  })
);
