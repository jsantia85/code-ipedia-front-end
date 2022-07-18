import CategoryCode from './CategoryCode'

const CodeNav = (props) => {
  return (
    <nav>
      <h1>Code List</h1>
      <CategoryCode codes={props.codes} setCodeCategory={props.setCodeCategory}/>
    </nav>
  )
}

export default CodeNav