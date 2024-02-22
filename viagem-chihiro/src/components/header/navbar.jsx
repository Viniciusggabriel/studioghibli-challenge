import Links from "./links";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      {window.matchMedia("(min-width: 600px)").matches && <Links />}
    </nav>
  );
};

export default Navbar;
