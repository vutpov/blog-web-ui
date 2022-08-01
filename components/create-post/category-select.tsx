import { Category } from '@/models/reponse/category.response'
import CategoryService from '@/service/category.service'
import React, { useEffect, useState } from 'react'
import Select, { SelectProps } from '../shared/Select'

const category = new CategoryService()

interface CategorySelectProps extends Omit<SelectProps, 'options'> {}

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const getData = async () => {
      let response = await category.getAll()

      setCategories([...categories, ...response.data])
    }

    getData()
  }, [])

  return (
    <Select
      {...props}
      options={categories.map((item) => {
        return {
          label: item.name,
          value: item.id,
        }
      })}
    />
  )
}

export default CategorySelect
