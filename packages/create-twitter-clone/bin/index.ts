#!/usr/bin/env node

import { createWorkspace } from 'create-nx-workspace';
import { names } from '@nx/devkit';
import yargs from 'yargs';

async function main() {
  const parser = yargs(process.argv.slice(2))
    .command('<name>', 'The name for the workspace')
    .demandCommand(1, 'A name for the workspace is needed')
    .option('scope', {
      type: 'string',
      describe: 'Your organization scope',
    })
    .help();

  const argv = await parser.parse();
  const name = names(argv._[0] as string).name;
  const className = names(name).className;
  const propertyName = names(name).propertyName;
  const constantName = names(name).constantName;
  const scope = names(argv.scope ?? name).name;
  const fileName = names(name).fileName;

  console.log(`Creating the workspace: ${name}`);

  // This assumes "twitter-clone" and "create-twitter-clone" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version;

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(
    `twitter-clone@${presetVersion}`,
    {
      name,
      scope,
      fileName,
      className,
      propertyName,
      constantName,
      nxCloud: 'github',
      packageManager: 'pnpm',
    }
  );

  console.log(`Successfully created the workspace: ${directory}.`);
}

main();
