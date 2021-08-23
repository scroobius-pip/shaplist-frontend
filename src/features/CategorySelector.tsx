import { Button, Menu, Pane, Position, majorScale, SelectField, SelectMenu, SelectMenuContent } from 'evergreen-ui'
import React from 'react'
import { useState } from 'react'
import Categories from 'utils/categories'

interface Props {
    value: string
    onChange: (value: string) => any
    // control
}


const CategorySelector = ({ value, onChange }: any) => {
    const categoryNames = ['Pick Category', ...Object.values(Categories).map(c => c.name).sort((a, b) => a >= b ? 1 : -1)]
    const [category, setCategory] = useState<string>(categoryNames[0])

    return <Pane>
        <SelectField
            value={category}
            onChange={(e) => {
                setCategory(e.target.value)
            }}
            marginBottom={majorScale(1)}
            label='Category (Optional)'
            description='Selecting a category makes it easier for customers to find your product'
        >
            {categoryNames.map((categoryName) => {
                return <option key={categoryName} value={categoryName}>
                    {categoryName}
                </option>
            })}
        </SelectField>
        {category !== 'Pick Category' && <SelectField
            // label='Sub Categories'

            description='Subcategory'
        >
            {Categories[category].map(subCat => {
                return <option key={subCat.name} value={subCat.id}>
                    {subCat.name}
                </option>
            })}
        </SelectField>}
    </Pane>
}



export default CategorySelector