import { getHelloWorld } from "../actions/hello";

export default async function HelloWorldPage() {
  const data = await getHelloWorld();

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-manrope text-primary-dark">
      <div className="max-w-md w-full relative">
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Glassmorphism Card */}
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 shadow-soft-lg rounded-4xl p-8 overflow-hidden z-10 transition-transform hover:scale-[1.01] duration-300">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
              Hello World
            </h1>
            <p className="text-primary-light font-medium text-lg">
              Vault & Virtue Design System
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm">
              <h2 className="text-sm uppercase tracking-wider text-primary/70 font-semibold mb-2">
                Server Action Response
              </h2>
              {"error" in data ? (
                <div className="text-accent-red font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-red" />
                  {data.error}
                </div>
              ) : (
                <div className="text-accent-green font-medium">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent-green" />
                    API Connected
                  </div>
                  <pre className="text-xs text-primary-dark bg-slate-100/50 p-2 rounded-lg overflow-x-auto border border-white/50">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-indigo-glow hover:bg-primary-dark transition-all active:scale-95">
              Explore
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
