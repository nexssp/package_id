const {
  nxsError,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

var cuid = require("cuid");
NexssStdout[NexssStdout.resultField_1] = cuid();

delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
