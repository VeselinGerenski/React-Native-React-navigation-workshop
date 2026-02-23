import api from "./request.js";

export function fetchCategories() {
    return api.get("/categories");
};