import { useState, useEffect } from "react";
import { Input, Button, Select, ProductCard, Pagination } from "../../components"
import product from "../../services/products.services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const ProductSection = () => {
    const [searchParams] = useSearchParams();
    const categoryFromQuery = searchParams.get("category");

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery || "");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { isPending, error, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: () => product.allProducts(),
    });

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => product.allCategories(),
    });

    const [productPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productPerPage // = 1 * 6 = 6
    const firstIndex = lastIndex - productPerPage // = 6 - 6 = 0

    const filterProducts = () => {
        if (!products) return [];

        return products.filter((product) => {
            const matchesSearch = search
                ? product.title.toLowerCase().includes(search.toLowerCase())
                : true;

            const matchesCategory = selectedCategory
                ? product.category === selectedCategory
                : true;

            return matchesSearch && matchesCategory;
        });
    };

    useEffect(() => {
        if (products) {
            setFilteredProducts(filterProducts());
        }
    }, [search, selectedCategory, products]);


    const handleClear = () => {
        setSearch("");
        setSelectedCategory("");
    };

    return (
        <section className="flex flex-col gap-10">
            <h3 className="text-h4">Our products</h3>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
                <span className="flex gap-4 flex-col md:flex-row">
                    <Input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={setSearch}
                    />
                    <Select
                        options={categories}
                        placeholder="Categories"
                        value={selectedCategory}
                        onChange={(value) => setSelectedCategory(value)}
                    />
                </span>
                <span className="flex gap-4 justify-center">
                    <Button label="Clean" outlined click={handleClear} />
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {isPending && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {filterProducts && (
                    filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ).slice(firstIndex, lastIndex) : (
                        <p>No products found</p>
                    )
                )}
            </div>
            <div className="flex justify-center">
                <Pagination perPage={productPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} total={filteredProducts.length} />
            </div>
        </section>
    );
};