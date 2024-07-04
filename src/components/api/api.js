fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((posts) => {
    if(posts.length > 1) {
        console.log(posts[-1].id)
    } else (
        console.log('Menos de dois posts')
    )
})
.catch((error) => console.error('Erro ao buscar os post:', error));

