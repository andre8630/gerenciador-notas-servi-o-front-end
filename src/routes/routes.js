import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./private-routes";
import {
  Login,
  Register,
  ListarOrdens,
  Painel,
  CreateOrdens,
  EditOrdens,
  UserEdit,
  PasswordEdit,
} from "../containers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* <Route path="/cadastro" element={<Register />} /> */}

      <Route
        path="/editar-usuario"
        element={
          <PrivateRoute>
            {" "}
            <UserEdit />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-senha"
        element={
          <PrivateRoute>
            {" "}
            <PasswordEdit />{" "}
          </PrivateRoute>
        }
      />

      <Route
        path="/listar-ordens"
        element={
          <PrivateRoute>
            {" "}
            <ListarOrdens />{" "}
          </PrivateRoute>
        }
      />

      <Route
        path="/criar-ordens"
        element={
          <PrivateRoute>
            {" "}
            <CreateOrdens />{" "}
          </PrivateRoute>
        }
      />

      <Route
        path="/editar-ordens"
        element={
          <PrivateRoute>
            {" "}
            <EditOrdens />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/painel"
        element={
          <PrivateRoute>
            {" "}
            <Painel />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            {" "}
            <Painel />{" "}
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
