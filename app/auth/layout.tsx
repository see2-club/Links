"use client"

import RetroGrid from "@/components/magicui/retro-grid";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black to-indigo-950">
      {/* {children} */}
      {children} 
      <RetroGrid />
    </div>
  );
}

export default AuthLayout;

