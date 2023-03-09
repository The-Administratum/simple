import mri from "mri";

const main = async () => {
    /**
     * @todo process.env.__CLI_ARGV
     * here we parse the 2 arguments given to the command
     */
    const _argv = process.argv.slice(2);
    const args = mri(_argv, {
        boolean: ["no-clear"]
    });

    const command = args._.shift() || "usage";
    showBanner(command === "dev");
};
