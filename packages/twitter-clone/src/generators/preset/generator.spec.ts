import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration, names } from '@nx/devkit';
import * as devkit from '@nx/devkit';

import { presetGenerator } from './generator';
import { PresetGeneratorSchema } from './schema';

describe('preset generator', () => {
  let tree: Tree;
  const projectName = names("testProject").name;
  const options: PresetGeneratorSchema = {
    className: names(projectName).className,
    constantName: names(projectName).constantName,
    fileName: names(projectName).propertyName,
    propertyName: names(projectName).fileName,
    scope: names("org").name,
    name: projectName };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await presetGenerator(tree, options);
    const config = readProjectConfiguration(tree, projectName);
    expect(config).toBeDefined();
  });
});
