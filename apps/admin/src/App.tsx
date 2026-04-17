import { Link, Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-[-0.03em]">Admin Dashboard</h1>
      <p className="text-slate-600">
        Manage doctors, specialties, homepage content, and booking requests.
      </p>
    </section>
  );
}

function Doctors() {
  return <h2 className="text-2xl font-semibold">Doctors</h2>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Ruby Admin
          </p>
          <nav className="mt-8 space-y-3 text-sm">
            <Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" to="/">
              Dashboard
            </Link>
            <Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" to="/doctors">
              Doctors
            </Link>
          </nav>
        </aside>

        <main className="p-6 lg:p-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
