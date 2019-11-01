import * as core from "@actions/core";

import * as os from "os";
import * as path from "path";
import * as fs from "fs";

function getAbsolutePath(inputFilePath: string): string {
    if (inputFilePath[0] !== "~")
        return path.resolve(inputFilePath);
    
    const homeDirectory = os.homedir();
    if (homeDirectory) 
        return path.join(homeDirectory, inputFilePath.slice(1));

    throw new Error("Unable to resole `~` to HOME");
}

async function run() {
    const path = getAbsolutePath(core.getInput("path", { required: true }));
    core.debug("Path : " + path);
    const text = fs.readFileSync(path, {encoding: "utf8"});
    core.debug("Text : " + text);
    core.setOutput("text", text);
}

run();

export default run;
