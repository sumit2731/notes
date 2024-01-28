/**
 * Ternary operator comes handy when we want to render something no matter if condition is true
 * or false
 *
 * like '&&' operator ternary do Short circuiting i.e code is executed only when needed
 */

function App({ user }) {
  const isLoggedIn = !!user;

  return (
    <>
      {/* with && */}
      {isLoggedIn && <AdminDashboard />}
      {!isLoggedIn && <p>Please login first</p>}
      {/* with ternary */}

      {isLoggedIn ? <AdminDashboard /> : <p>Please login first</p>}
    </>
  );
}
