// import React from 'react'
// import { useRouteMatch } from 'react-router-dom'




// const generatePost= post => {
//     const component = () => require(`./pages/${post}`).default
    
//     try {
//         return React.createElement(component())
//     } 
//     catch(err){
//       console.warn(err)
//       return React.createElement(()=> 404)
//     }
// }



// export default function PostRenderer () {

//     const {
//         params: { post }
//     } = useRouteMatch()

//     return generatePost(post)
// }