import type { Route } from './+types/home';

export const meta: Route.MetaFunction = () => [
  { title: "Jonathan's Portfolio" },
  {
    name: 'description',
    content: 'Innovative full-stack developer portfolio.',
  },
];

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">I’m Jonathan</h1>
      <p className="text-xl mt-4">
        Full-Stack Developer Crafting Digital Experiences
      </p>
    </section>
  );
}
