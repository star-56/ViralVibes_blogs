import Header from './index/Header';

const Layout = ({ children }) => (
  
  <>
    <Header />
    {children}
  </>
);

export default Layout;