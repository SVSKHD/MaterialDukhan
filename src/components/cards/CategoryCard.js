import { FaEdit, FaTrash } from "react-icons/fa"

import { deleteCategory } from "../functions/Categories"
const CategoryCard = ({ name, description, editoperation}) => {
    const handleRemove = (name) => {
        deleteCategory(name)
    }
    return (
        <>
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{description}</h6>
                    <hr />
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" onClick={() => editoperation} class="btn btn-outline-dark"><FaEdit size={25} /></button>
                        <button type="button" onClick={() => handleRemove(name)} class="btn btn-outline-danger"><FaTrash size={25} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryCard