import axios from "axios";
import $api, { API_URL } from "../http/index";

export default class PaintingsService {
  static AuthorCreate = (formData: FormData) => {
    return $api.post("/painting/admin/author-create/", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Не обязательно, но можно оставить
      },
    });
  };
  static async deleteAuthor(id: number) {
    return $api.delete(`/painting/admin/author-delete/${id}/`);
  }
  static async updateAuthor(formData: FormData, id: number) {
    return $api.put(`/painting/admin/author-update/${id}/`, formData);
  }
  static async updateAuthorPatch(formData: FormData, id: number) {
    return $api.patch(`/painting/admin/author-update/${id}/`, formData);
  }
  static async getAuthors(
    page?: number,
    pageSize?: number,
    authorId?: number | undefined
  ) {
    return axios.get(`${API_URL}/painting/admin/authors/`, {
      params: {
        page,
        page_size: pageSize,
        author: authorId,
      },
    });
  }
  static async authorRetrieve(id: number) {
    return axios.get(`${API_URL}/painting/admin/author-retrive/${id}/`);
  }
  static async createCategory(formData: any) {
    return $api.post(`/painting/admin/category-create/`, formData);
  }
  static async deleteCategory(id: number) {
    return $api.delete(`/painting/admin/category-delete/${id}`);
  }
  static async getCategoryList(page?: number, pageSize?: number) {
    return axios.get(`${API_URL}/painting/admin/category-list/`, {
      params: {
        page,
        page_size: pageSize,
      },
    });
  }
  static async getCategoryPaints(id: number) {
    return axios.get(`${API_URL}/painting/admin/category-retreive/${id}/`);
  }
  static async updateCategory(id: number, title: string) {
    return $api.put(`/painting/admin/category-update/${id}/`, { title });
  }
  static async updateCategoryPatch(formData: FormData, id: number) {
    return $api.patch(`/painting/admin/category-update/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async createPainting(formData: FormData) {
    return $api.post(
      `/painting/admin/create/`,

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  static async deletePainting(id: number) {
    return $api.delete(`/painting/admin/delete/${id}/`);
  }
  static async updatePainting(formData: FormData, id: number) {
    return $api.put(`/painting/admin/update/${id}/`, formData);
  }
  static async updatePaintingPatch(formData: FormData, id: number) {
    return $api.patch(`/painting/admin/update/${id}/`, formData);
  }
  //
  static async paintingList({
    page,
    pageSize,
    categoryTitle,
    authorId,
  }: {
    page: number;
    pageSize: number;
    categoryTitle?: string;
    authorId?: number | undefined;
  }) {
    return axios.get(`${API_URL}/painting/auth/list/`, {
      params: {
        page,
        page_size: pageSize,
        author: authorId,
        category_title: categoryTitle,
      },
    });
  }
  static async paintingRetrieve(id: number) {
    return axios.get(`${API_URL}/painting/auth/retrieve/${id}/`);
  }
  static async paintingFollowList({
    page,
    pageSize,
  }: {
    page?: number;
    pageSize?: number;
  }) {
    return $api.get(`${API_URL}/painting/auth/follow-list/`, {
      params: {
        page,
        page_size: pageSize,
      },
    });
  }
  static async paintingFollow(id: number) {
    return $api.post(`/painting/auth/${id}/follow/`);
  }
  static async paintingStopFollow(id: number) {
    return $api.delete(`/painting/auth/${id}/follow/`);
  }
  static async delete(url: string) {
    return $api.delete(url);
  }
}
