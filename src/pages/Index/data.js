const indexData = [
  {
    code: `const handleChange = evt => {
      setFormData({...formData, 
      [evt.target.name]: evt.target.value})
    }`,
    caption: 'This is a handleChange function',
    category: 'JavaScript',
  },
  {
    code: `h1::before {  
      transform: scaleX(0);
      transform-origin: bottom right;
    }
    
    h1:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    
    h1::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      inset: 0 0 0 0;
      background: hsl(100 100% 80%);
      z-index: -1;
      transition: transform .3s ease;
    }`,
    caption: "This is a cool hover effect with a background that slides in from the left",
    category: 'CSS',
  },
]

export default indexData
