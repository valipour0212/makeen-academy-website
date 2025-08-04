interface FAQCategoryProps {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

function FAQCategory({categories, selected, onSelect}: FAQCategoryProps) {
    return (
        <div className="my-5 flex gap-6 overflow-x-auto md:mt-6 md:mb-8">
            {
                categories.map(category => {
                        const isActive = selected === category;
                        return (
                            <button
                                key={category}
                                onClick={() => onSelect(category)}
                                className={`cursor-pointer whitespace-nowrap font-medium text-sm md:text-lg ${
                                    isActive ? "bg-[#36A8D9] text-white p-4 rounded-full" : ""
                                }`}
                            >
                                {category}
                            </button>
                        );
                    }
                )
            }
        </div>
    );
}

export default FAQCategory;
