import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const api = "https://dummyjson.com/products"
    const [products, setProducts] = useState([])
    const [error,seterror]=useState(null)
const [loading,setloading]=useState(true)
    const TotalProduct = async () => {
        try {
            setloading(true)
            const res = await axios.get(api)
            const data = res.data.products
            setProducts(data)
        } catch (error) {
            console.log(error)
            seterror(error.message)
        }finally{
            setloading(false)
        }
    }
 const uniqcategory = (data, property) => {
        if (!data) return []  
        const newVal = data.map((ele) => ele[property])  
        const unique = [...new Set(newVal)]               
        return unique
    }
const CategoryOnlyData = uniqcategory(products, "category")
    const BrandOnlyData = uniqcategory(products, "brand")
    useEffect(() => {
        TotalProduct()

    }, [])

    return (
        <DataContext.Provider value={{ TotalProduct, products,setProducts ,CategoryOnlyData,BrandOnlyData,loading,setloading,error,seterror}}>
            {children}
        </DataContext.Provider>
    )

}

 