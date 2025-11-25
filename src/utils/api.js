import { API_URL, ACCESS_TOKEN_KEY } from "./constants";

/** low-level fetch wrapper */
const apiFetch = async (path, options = {}) => {
  const url = path.startsWith("http") ? path : `${API_URL}${path}`;
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(url, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = new Error(data.error || data.message || "Terjadi kesalahan");
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
};

/* ==========================
        AUTHENTICATION
========================== */
export const loginApi = (payload) => apiFetch("/auth/login", { method: "POST", body: JSON.stringify(payload) });
export const registerApi = (payload) => apiFetch("/auth/register", { method: "POST", body: JSON.stringify(payload) });
export const refreshTokenApi = (payload) => apiFetch("/auth/refresh-token", { method: "POST", body: JSON.stringify(payload) });

/* ==========================
        PROJECT
========================== */
export const fetchProjectsApi = () => apiFetch("/projects");
export const fetchProjectByIdApi = (id) => apiFetch(`/projects/${id}`);
export const createProjectApi = (payload) => apiFetch("/projects", { method: "POST", body: JSON.stringify(payload) });
export const updateProjectApi = (id, payload) => apiFetch(`/projects/${id}`, { method: "PUT", body: JSON.stringify(payload) });
export const deleteProjectApi = (id) => apiFetch(`/projects/${id}`, { method: "DELETE" });

export const addProjectStarApi = (projectId, payload) => apiFetch(`/projects/${projectId}/star`, { method: "POST", body: JSON.stringify(payload) });
export const deleteProjectStarApi = (id) => apiFetch(`/projects/star/${id}`, { method: "DELETE" });

export const addProjectFeatureApi = (projectId, payload) => apiFetch(`/projects/${projectId}/feature`, { method: "POST", body: JSON.stringify(payload) });
export const deleteProjectFeatureApi = (id) => apiFetch(`/projects/feature/${id}`, { method: "DELETE" });

/* ==========================
        SKILL
========================== */
export const fetchSkillsApi = () => apiFetch("/skills");
export const fetchSkillByIdApi = (id) => apiFetch(`/skills/${id}`);
export const createSkillApi = async (payload) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  if (payload.image) formData.append("image", payload.image);

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_URL}/skills`, { method: "POST", headers: token ? { Authorization: `Bearer ${token}` } : {}, body: formData });
  return res.json();
};

export const updateSkillApi = async (id, payload) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  if (payload.image) formData.append("image", payload.image);

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_URL}/skills/${id}`, { method: "PATCH", headers: token ? { Authorization: `Bearer ${token}` } : {}, body: formData });
  return res.json();
};

export const deleteSkillApi = (id) => apiFetch(`/skills/${id}`, { method: "DELETE" });

/* ==========================
        EXPERIENCE
========================== */
export const fetchExperiencesApi = () => apiFetch("/experiences");
export const fetchExperienceByIdApi = (id) => apiFetch(`/experiences/${id}`);
export const createExperienceApi = (payload) => apiFetch("/experiences", { method: "POST", body: JSON.stringify(payload) });
export const updateExperienceApi = (id, payload) => apiFetch(`/experiences/${id}`, { method: "PATCH", body: JSON.stringify(payload) });
export const deleteExperienceApi = (id) => apiFetch(`/experiences/${id}`, { method: "DELETE" });

export const addExperiencePicApi = async (experienceId, file) => {
  const formData = new FormData();
  formData.append("image", file);
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_URL}/experiences/${experienceId}/pics`, { method: "POST", headers: token ? { Authorization: `Bearer ${token}` } : {}, body: formData });
  return res.json();
};

export const deleteExperiencePicApi = (id) => apiFetch(`/experiences/pics/${id}`, { method: "DELETE" });

/* ==========================
        HOME
========================== */
export const fetchHomeApi = () => apiFetch("/home");
export const createHomeApi = async (payload) => {
  const formData = new FormData();
  formData.append("about", payload.about);
  formData.append("education", payload.education);
  formData.append("user", payload.user);
  if (payload.cv) formData.append("cv", payload.cv);
  if (payload.self_pic) formData.append("self_pic", payload.self_pic);

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_URL}/home`, { method: "POST", headers: token ? { Authorization: `Bearer ${token}` } : {}, body: formData });
  return res.json();
};

export const updateHomeApi = async (id, payload) => {
  const formData = new FormData();
  formData.append("about", payload.about);
  formData.append("education", payload.education);
  if (payload.cv) formData.append("cv", payload.cv);
  if (payload.self_pic) formData.append("self_pic", payload.self_pic);

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_URL}/home/${id}`, { method: "PATCH", headers: token ? { Authorization: `Bearer ${token}` } : {}, body: formData });
  return res.json();
};

export const fetchHomeContactsApi = () => apiFetch("/home_contact");
export const createHomeContactApi = (payload) => apiFetch("/home_contact", { method: "POST", body: JSON.stringify(payload) });
export const updateHomeContactApi = (id, payload) => apiFetch(`/home_contact/${id}`, { method: "PATCH", body: JSON.stringify(payload) });
export const deleteHomeContactApi = (id) => apiFetch(`/home_contact/${id}`, { method: "DELETE" });