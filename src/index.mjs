// based on the nuxi source code

import commands from "./commands/index.mjs";

export const runCommand = async (command, argv = process.argv.slice(2), options) => {
    // nuxi is using mri package but create vue use another so i'm skipping this
    // also I need to study how node handle this natively
    const args = () => `temp`;
    argv; // shit
    const cmd = await commands[command];
    if (!cmd) {
        throw new Error("invalid command");
    }

    await cmd.invoke(args, options);
};
