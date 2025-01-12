import axios from "axios";
import $api, { API_URL } from "../http/index";

export default class PaintingsService {
  static async AuthorCreate(name: string, bio: string) {
    return $api.post(`${API_URL}/user/register/`, {
      name,
      bio,
    });
  }
  static async deleteAuthor(id: number) {
    return $api.get(`/painting/admin/author-delete/${id}/`);
  }
  static async updateAuthor(id: number) {
    return $api.put(`/painting/admin/author-update/${id}/`);
  }
  static async updateAuthorPatch(id: number) {
    return $api.patch(`/painting/admin/author-update/${id}/`);
  }
  static async getAuthors() {
    return axios.get(`${API_URL}/painting/admin/authors/`);
  }
  static async createCategory(formData: any) {
    return $api.post(`/painting/admin/category-create/`, formData);
  }
  static async deleteCategory(id: number) {
    return $api.delete(`/painting/admin/category-delete/${id}`);
  }
  static async getCategoryList() {
    return axios.get(`${API_URL}/painting/admin/category-list/`);
  }
  static async updateCategory(id: number, title: string) {
    return $api.put(`/painting/admin/category-update/${id}/`, { title });
  }
  static async updateCategoryPathc(id: number, title: string) {
    return $api.patch(`/painting/admin/category-update/${id}/`, { title });
  }
  static async createPainting(
    // title: string,
    // price: string,
    // currency: string,
    // description: string,
    // width: string,
    // height: string,
    // images: string[],
    // author: number,
    // category: number
    formData: FormData
  ) {
    return $api.post(
      `/painting/admin/create/`,
      // title,
      // price,
      // currency,
      // description,
      // width,
      // height,
      // images,
      // author,
      // category,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Устанавливаем заголовок явно
        },
      }
    );
  }
  static async deletePainting(id: number) {
    return $api.delete(`/painting/admin/delete/${id}/`);
  }
  static async updatePainting(
    title: string,
    price: string,
    currency: string,
    description: string,
    width: string,
    height: string,
    images: string[],
    author: number,
    category: number,
    id: number
  ) {
    return $api.put(`/painting/admin/update/${id}/`, {
      title,
      price,
      currency,
      description,
      width,
      height,
      images,
      author,
      category,
    });
  }
  static async updatePaintingPatch(
    title: string,
    price: string,
    currency: string,
    description: string,
    width: string,
    height: string,
    images: string[],
    author: number,
    category: number,
    id: number
  ) {
    return $api.patch(`/painting/admin/update/${id}/`, {
      title,
      price,
      currency,
      description,
      width,
      height,
      images,
      author,
      category,
    });
  }
  //
  static async paintingList() {
    return axios.get(`${API_URL}/painting/auth/list/`);
  }
  static async paintingRetrieve(id: number) {
    return $api.get(`/painting/auth/retrieve/${id}/`);
  }
  static async paintingFollow(id: number) {
    return $api.post(`/painting/auth/${id}/follow/`);
  }
  static async paintingStopFollow(id: number) {
    return $api.delete(`/painting/auth/${id}/follow/`);
  }
}
