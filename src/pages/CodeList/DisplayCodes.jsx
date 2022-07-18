import Code from './Code'

const DisplayCodes = (props) => {
console.log(props)
  const selectedCodes = props.posts.map((post, idx) => {
    return post.category[0].category === props.category &&
      <Code
        key={idx}
        post={post}
      />
  })

  return (
    <div className="code-list">
      {selectedCodes}
    </div>
  )
}

export default DisplayCodes


