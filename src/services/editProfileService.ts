import api from "../lib/axios";



export const editProfileService = {

 editProfile : (id,data) => api.put(`/users/${id} `,data)

};
