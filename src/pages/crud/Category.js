import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import { getCategories, createCategory, deleteCategory } from "../../components/functions/Categories"
import CategoryCard from "../../components/cards/CategoryCard";

const CategoryCrud = () => {
    useEffect(() => {
        loadCategories();
    }, []);
    const loadCategories = () => {
        setLoading(true);
        getCategories().then((res) => {
            setCategories(res.data);
            setLoading(false);
        });
    };


    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    // createcategory
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("")
    const [listmessage, setListMessage] = useState("")

    const handleSubmit = () => {
        createCategory(category, description).then(() => {
            setLoading(true)
            setMessage("Category is created")
            loadCategories()
            setLoading(false)
        })
    }

    

    return (
        <>
            <Layout>
                <div className="mb-4" />
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Category Name</label>
                                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Category Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Create Category</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <hr />
                    <h5>All Categories</h5>
                    <div className="row">
                        {categories.map((c, i) => (
                            <div key={i} className="col-md-3">
                                <CategoryCard name={c.name} description={c.description}  />
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default CategoryCrud