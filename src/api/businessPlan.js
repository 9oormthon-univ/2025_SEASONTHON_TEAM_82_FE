import { http } from "./http";

// GET /api/v1/business-plans/my?page=0&size=15
export async function fetchMyBusinessPlans({ page = 0, size = 15 } = {}) {
  const res = await http.get(`/api/v1/business-plans/my`, {
    params: { page, size },
  });
  
  return res.data.data;
}