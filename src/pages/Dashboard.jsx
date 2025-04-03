import { logout } from "../Utils/auth";

export default function Dashboard() {
  function handleLogout() {
    logout();
    location.reload();
  }

  return (
    <div>
      <h1>Bem-vindo ao Painel!</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

