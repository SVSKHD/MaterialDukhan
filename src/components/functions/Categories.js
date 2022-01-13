import axios from "axios";

export const getCategories = async () => (
 await axios.get(`${process.env.REACT_APP_API}/categories`)
)

export const createCategory = async (name,description) =>(
    await axios.post(`${process.env.REACT_APP_API}/category`,{name , description})
)

export const deleteCategory = async (name) =>(
    await axios.delete(`${process.env.REACT_APP_API}/category/${name}`)
)