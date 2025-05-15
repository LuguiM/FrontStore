import { useState } from "react";
import { Input, Button, Select, ProductCard } from "../../components"
import product  from "../../services/products.services";
import { useQuery } from "@tanstack/react-query";


export const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const { isPending, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: () => product.allProducts(),
    })

    return (
        <section className="flex flex-col gap-10">
            <h3 className="text-h4">Our products</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
                <span className="flex gap-4 flex-col md:flex-row">
                    <Input type="text" placeholder="Search" />
                    <Select
                        options={["All", "Category 1", "Category 2"]}
                        placeholder="Categories"
                        value={selectedCategory}
                        onChange={(value) => setSelectedCategory(value)}
                    />
                </span>
                <span className="flex gap-4 justify-center">
                    <Button label="Search" />
                    <Button label="Clean" outlined />
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {isPending && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </section>
    )
}
