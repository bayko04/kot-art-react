import Header from "../../components/Header/Header";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FC, useEffect } from "react";
import "./HeaderLayout.scss";
import SearchModal from "../../shared/ui/SearchModal/SearchModal";
import { useSelector } from "react-redux";

const HeaderLayout: FC = () => {
  const { searchModal } = useSelector((state: any) => state.search);

  useEffect(() => {
    searchModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [searchModal]);

  return (
    <div className="header-layout">
      <div className="header-layout__wrapper">
        <div className="header-layout__header">
          <Header />
          <UnderHeader />

          {searchModal && <SearchModal />}
        </div>
        <div className="header-layout__content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HeaderLayout;
