import { useState } from "react";
import { Input, Button, Select } from "../../components"

export const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
        <section className="flex flex-col gap-10">
            <h3 className="text-h4">Our products</h3>
            <div className="flex flex-wrap gap-4 justify-end">
                <Input type="text" placeholder="Search" />
                <Select
                    options={["All", "Category 1", "Category 2"]}
                    placeholder="Categories"
                    value={selectedCategory}
                    onChange={(value) => console.log(value)}
                />
                <Button label="Search" />
                <Button label="Clean" outlined />
            </div>
        </section>
    )
}
