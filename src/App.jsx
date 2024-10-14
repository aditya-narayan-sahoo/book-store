import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>Header</nav>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <nav>Footer</nav>
    </>
  );
};

export default App;
