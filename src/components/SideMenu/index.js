import React, { useState, useEffect } from "react";
import listLinks from "./menu-list";
import {
  Container,
  ItemContainer,
  ListLink,
  MenuButton,
  User,
  H1,
  //   Logo,
} from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useUser } from "../../hooks/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";

export function SideMenu() {
  const navigate = useNavigate();
  const { logout, user: contextUser } = useUser(); // Adicione esta linha para usar o usuário do contexto
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [users, setUser] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Remova a função loadUser() completamente se estiver usando o contexto
  // Se precisar carregar os dados, faça assim:

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await api.get("/users");
        console.log("Dados do usuário:", response.data[0].url_logo); // Verifique a estrutura do objeto
        setUser(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    loadUser();
  }, []); // Executa apenas quando contextUser mudar

  return (
    <>
      {isMobile && (
        <MenuButton onClick={toggleMenu}>
          <MenuIcon style={{ color: "#FFFFFF", fontSize: "30px" }} />
        </MenuButton>
      )}

      <Container isMenuOpen={isMenuOpen} isMobile={isMobile}>
        <User>
          {/* <Logo>
            <img src={users?.url_logo} />
          </Logo> */}
          <H1>Olá, {users?.name || "Usuário"}</H1>
        </User>
        <hr />

        {listLinks.map((item) => (
          <ItemContainer
            key={item.id}
            isActive={location.pathname === item.link}
          >
            <item.icon className="icon" />
            <ListLink
              to={item.link}
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              {item.label}
            </ListLink>
          </ItemContainer>
        ))}

        <hr />

        <ItemContainer style={{ position: "relative", bottom: "30px" }}>
          <LogoutIcon style={{ color: "#FFFFFF" }} />
          <ListLink
            to={"/login"}
            onClick={() => {
              logout();
              isMobile && setIsMenuOpen(false);
            }}
          >
            Sair
          </ListLink>
        </ItemContainer>
      </Container>
    </>
  );
}
