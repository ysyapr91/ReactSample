import 'css/common.css';
import Header from 'view/layout/Header';
import Sidebar from 'view/layout/Sidebar';
import Content from 'view/layout/Content';
import Footer from 'view/layout/Footer';



function Layout() {
  return (
    <div className="App">
      <Header/>
        <Content/>
      <Footer/>
    </div>
  );
}

export default Layout;
    