   import api from "./request.js";

export function getAll() {
    return api.get('/meals');
}

export function getAllByCategoryId(categoryId) {
   if (!categoryId) {
       throw new Error("Category ID is required");
    }

    return api.get(`/meals?categoryId=${categoryId}`);
}