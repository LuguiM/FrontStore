import { useState } from "react";
import { Input, Button, Select } from "../../components"

export const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
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
        </section>
    )
}
