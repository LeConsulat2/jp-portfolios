import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  route('about', 'routes/about.tsx'),

  ...prefix('projects', [
    route('', 'routes/projects.tsx'),
    route(':project', 'routes/project.tsx'), // ✅ 고쳤다
  ]),
] satisfies RouteConfig;
