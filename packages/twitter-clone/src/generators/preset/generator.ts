import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  // formatFiles,
  generateFiles,
  Tree
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const projectRoot = `.`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    targets: {
      dev: {
        command: 'prisma generate & next dev',
      },
      build: {
        command: 'prisma generate && prisma db push && next build',
      },
    },
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
  return addDependenciesToPackageJson(
    tree,
    {
      "@hookform/resolvers": "^3.3.4",
      "@next-auth/prisma-adapter": "^1.0.7",
      "@paralleldrive/cuid2": "^2.2.2",
      "@prisma/client": "^5.9.1",
      "@tanstack/react-query": "^5.20.5",
      "@tanstack/react-query-devtools": "^5.20.5",
      "@types/node": "20.11.19",
      "@types/react": "^18.2.55",
      "@types/react-dom": "18.2.19",
      "@upstash/ratelimit": "^1.0.1",
      "@upstash/redis": "^1.28.4",
      "axios": "^1.6.7",
      "clsx": "^2.1.0",
      "emoji-picker-react": "^4.7.17",
      "eslint": "^8.56.0",
      "eslint-config-next": "^14.1.0",
      "framer-motion": "^11.0.5",
      "husky": "^9.0.11",
      "next": "^14.1.0",
      "next-auth": "^4.24.6",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-error-boundary": "^4.0.12",
      "react-hook-form": "^7.50.1",
      "react-intersection-observer": "^9.8.0",
      "react-toastify": "^10.0.4",
      "sass": "^1.71.0",
      "sharp": "^0.32.6",
      "socket.io-client": "^4.7.4",
      "tailwind-merge": "^2.2.1",
      "zod": "^3.22.4",
      "zustand": "^4.5.0"
    },
    {
      "@commitlint/cli": "^18.6.1",
      "@commitlint/config-conventional": "^18.6.2",
      "@flydotio/dockerfile": "^0.5.2",
      "@supabase/supabase-js": "^2.39.6",
      "@tanstack/eslint-plugin-query": "5.20.1",
      "@testing-library/dom": "^9.3.4",
      "@testing-library/jest-dom": "^6.4.2",
      "@testing-library/react": "^14.2.1",
      "@testing-library/user-event": "^14.5.2",
      "@total-typescript/ts-reset": "^0.5.1",
      "@types/jest": "^29.5.12",
      "@typescript-eslint/eslint-plugin": "^7.0.1",
      "@typescript-eslint/parser": "^7.0.1",
      "autoprefixer": "^10.4.17",
      "cookies-next": "^4.1.1",
      "cssnano": "^6.0.3",
      "dayjs": "^1.11.10",
      "dotenv": "^16.4.4",
      "encoding": "^0.1.13",
      "eslint-config-prettier": "^9.1.0",
      "eslint-plugin-jest-dom": "^5.1.0",
      "eslint-plugin-jsx-a11y": "^6.8.0",
      "eslint-plugin-prettier": "^5.1.3",
      "eslint-plugin-react": "^7.33.2",
      "eslint-plugin-tailwindcss": "^3.14.2",
      "eslint-plugin-testing-library": "^6.2.0",
      "jest": "^29.7.0",
      "jest-environment-jsdom": "^29.7.0",
      "lint-staged": "^15.2.2",
      "only-allow": "^1.2.1",
      "postcss": "^8.4.35",
      "prettier": "^3.2.5",
      "prettier-plugin-tailwindcss": "^0.5.11",
      "prisma": "^5.9.1",
      "tailwindcss": "^3.4.1",
      "tailwindest": "^2.3.0",
      "ts-jest": "^29.1.2",
      "ts-node": "^10.9.2",
      "typescript": "^5.3.3"
    }
  )
}

export default presetGenerator;
