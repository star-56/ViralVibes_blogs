import { Header } from './Header.jsx';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;