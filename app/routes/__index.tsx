import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function IndexLayout() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-slate-950">
      <Outlet />
    </div>
  );
}
