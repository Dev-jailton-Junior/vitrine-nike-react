import logo from "../../assets/logo (1).png";
import { Container, Icons, Logo, NavItem, NavMenu, SearchBar } from "./style";
import { FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
const Cabecalho = () => {
  return (
    <Container>
      <Logo src={logo} />
      <NavMenu>
        <NavItem>Ofertas</NavItem>
        <NavItem>Lançamentos</NavItem>
        <NavItem>Masculino</NavItem>
        <NavItem>Feminino</NavItem>
        <NavItem>Infantil</NavItem>
      </NavMenu>
      <SearchBar>
        <FaSearch />
        <input type="text" placeholder="Buscar" />
      </SearchBar>
      <Icons>
        <FaHeart />
        <FaShoppingBag />
      </Icons>
    </Container>
  );
};
export default Cabecalho;
