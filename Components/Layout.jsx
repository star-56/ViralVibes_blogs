import Header from './Header.jsx';

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
};

export default Layout;
