import { createReadStream, createWriteStream } from "fs";

import { createGzip } from "zlib";
import { pipeline } from "stream";

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream("./files/fileToCompress.txt");
  const destination = createWriteStream("./files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
