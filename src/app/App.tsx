import "./global.scss";
import HomePage from "../pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Author from "./pages/AuthorDetail/AuthorDetail";
import HeaderLayout from "../layouts/HeaderLayout/HeaderLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthorDetail from "../pages/AuthorDetail/AuthorDetail";
import PaintingDetails from "../pages/PaintingDetails/PaintingDetails";
import Contacts from "../pages/Contacts/Contacts";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllPaintings from "../pages/Lists/AllPaintings/AllPaintings";
import AllCategories from "../widgets/AllCategories/AllCategories";
import AllArtworks from "../pages/Lists/AllArtworks/AllArtworks";
import CategoryPaintings from "../pages/Lists/CategoryPaintings/CategoryPaintings";
import PaintsByCategory from "../pages/Lists/PaintsByCategory/PaintsByCategory";
import GalleryList from "../pages/Lists/GalleryList/GalleryList";
import AuthorsList from "../pages/Lists/AuthorsList/AuthorsList";
import FavoriteList from "../pages/Lists/FavoriteList/FavoriteList";
import CategoryRenderer from "../shared/ui/CategoryRenderer/CategoryRenderer";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import ConfirmEmail from "../pages/Auth/ConfirmEmail";
import ProfileLayout from "../layouts/ProfileLayout/ProfileLayout";
import AdminLogin from "../pages/Admin/AdminLogin/AdminLogin";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import PaintingsList from "../pages/Admin/Lists/PaintingsList/PaintingsList";
import CategoryList from "../pages/Admin/Lists/CategoryList/CategoryList";
import CreatePainting from "../pages/Admin/CreateForms/CreatePainting/CreatePainting";
import CreateCategory from "../pages/Admin/CreateForms/CreateCategory/CreateCategory";
import CreateAuthor from "../pages/Admin/CreateForms/CreateAuthor/CreateAuthor";
import EditCategory from "../pages/Admin/EditForms/EditCategory/EditCategory";
import EditPainting from "../pages/Admin/EditForms/EditPainting/EditPainting";
import EditAuthor from "../pages/Admin/EditForms/EditAuthor/EditAuthor";
import CreateAdmin from "../pages/Admin/CreateForms/CreateAdmin/CreateAdmin";
import AuthorsAdminList from "../pages/Admin/Lists/AuthorsList/AuthorsAdminList";
import RolesList from "../pages/Admin/Lists/RolesList/RolesList";
import ScrollToTop from "../components/ScrollTotop/ScrollToTop";

function App() {
  const { burger } = useSelector((state: any) => state.burger);

  useEffect(() => {
    burger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [burger]);

  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/author-detail/:id" element={<AuthorDetail />} />
            <Route path="/painting-details/:id" element={<PaintingDetails />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/all-paintings" element={<AllPaintings />} />
            <Route path="/all-categories" element={<AllCategories />} />
            <Route path="/all-artworks" element={<AllArtworks />} />
            <Route
              path="/category/paintings/:slug"
              element={<CategoryPaintings />}
            />
            <Route path="/paints-category" element={<PaintsByCategory />} />
            <Route path="/gallery" element={<GalleryList />} />
            <Route path="/authors-list" element={<AuthorsList />} />
            <Route path="profile/favorite" element={<FavoriteList />} />

            <Route path="/category/:slug" element={<CategoryRenderer />} />

            <Route path="/auth" element={<Auth />}>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="confirm-email" element={<ConfirmEmail />} />
            </Route>
          </Route>

          <Route path="/profile" element={<ProfileLayout />}></Route>

          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="paintings-list" element={<PaintingsList />} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="create-painting" element={<CreatePainting />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="create-artist" element={<CreateAuthor />} />
            <Route path="edit-category/:id" element={<EditCategory />} />
            <Route path="edit-painting/:id" element={<EditPainting />} />
            <Route path="edit-author/:id" element={<EditAuthor />} />
            <Route path="give-role" element={<CreateAdmin />} />
            <Route path="authors-list" element={<AuthorsAdminList />} />
            <Route path="create-roles" element={<RolesList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
