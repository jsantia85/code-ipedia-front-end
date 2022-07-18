const CategoryCode = (props) => {
    const categories = [...new Set(props.codes.map((code) => code.category))]
  
    return (
        // <h1>display</h1>
      <select onChange={(e) => props.setCodeCategory(e.target.value)}>
        {categories.map((category, idx) => (
          <option key={idx} value={category}>
            {category}
          </option>
  
        ))}
      </select>
    )
  }
  
  export default CategoryCode