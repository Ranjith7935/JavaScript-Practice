// 1
// const URL="https://dummyjson.com/todo"
// fetch(URL).then(res=>res.json())
// .then(data=>{
//     for(let i=0;i<data.todos.length;i++){
//         console.log(data.todos[i].userId);
// }}).catch(r=>console.log("not correct")
// );


// 2
// fetch("https://dummyjson.com/quotes")
//   .then(res => res.json())
//   .then(data => {
//       for (let i = 0; i < data.quotes.length; i++) {
//           console.log(data.quotes[i].id);
//       }
//   })
//   .catch(err => console.error("Error fetching quotes:", err));

// 3
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(res=>res.json())
// .then(data=>{
//     for(let i=0;i<data.length;i++){
//         if(data[i].albumId===50){
//             console.log(data[i].id+" " +data[i].title)
//         }
//     }
// });


// 4
// fetch("https://randomuser.me/api/")
// .then(res=>res.json())
// .then(data=>console.log(data.results[0].picture.large));


// 5
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res=>res.json())
.then(data=>console.log(data.abilities[0].ability.name));








