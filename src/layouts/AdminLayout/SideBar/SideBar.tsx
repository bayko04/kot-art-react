import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import listImg from "../../../shared/assets/images/svg/admin/list-text.svg";
import logoutImg from "../../../shared/assets/images/svg/admin/logout.svg";
import paintImg from "../../../shared/assets/images/svg/admin/paint.svg";
import painterImg from "../../../shared/assets/images/svg/admin/painter.svg";
import rolesImg from "../../../shared/assets/images/svg/admin/setting.svg";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../../shared/store/reducers/BurgerSlice";
import "./SideBar.scss";

interface ISidebar {
  id: number;
  title: string;
  link: string;
  img: string;
}

const SideBar = () => {
  const navigate = useNavigate();
  const { burger } = useSelector((state: any) => state.burger);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.slice(7);

  const SIDEBAR_LIST: ISidebar[] = [
    {
      id: 0,
      title: "Paintings",
      link: "paintings-list",
      img: paintImg,
    },
    {
      id: 1,
      title: "Categories",
      link: "category-list",
      img: listImg,
    },
    {
      id: 2,
      title: "Artists",
      link: "authors-list",
      img: painterImg,
    },
    {
      id: 3,
      title: "Roles",
      link: "create-roles",
      img: rolesImg,
    },
  ];

  const handleNavigate = () => {
    dispatch(setBurger(false));
  };

  return (
    <div className={`sidebar ${burger ? "show" : "hide"}`}>
      <div className="sidebar__row">
        <h2 onClick={() => navigate("/")} className="sidebar__title">
          KOT-ART
        </h2>

        <div className="sidebar__list">
          <ul>
            {SIDEBAR_LIST.map((item: ISidebar) => (
              <li
                className={`${path === item.link ? "activePath" : ""}`}
                onClick={handleNavigate}
                key={item.id}
              >
                <img src={item.img} alt="" />
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
            <li onClick={handleNavigate}>
              <img src={logoutImg} alt="" />
              <Link to="/">Back to site</Link>
            </li>
          </ul>
        </div>

        {/* <div className="sidebar__btn">
          <button>Back to site</button>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
