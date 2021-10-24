import { spawn } from "child_process";
import { projectRoot } from "./path";
export const withTaskName = <T>(name: string, fn: T) => {
  return Object.assign(fn, { displayName: name });
};

// 在node使用子进程来运行脚本

export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" "); //-rm rf
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", //直接将这个子进程的输出共享给父进程
      shell: true,
    });
    app.on("close", resolve);
  });
};
