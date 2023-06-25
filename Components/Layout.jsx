import Header from './header.jsx';

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
};

export default Layout;
