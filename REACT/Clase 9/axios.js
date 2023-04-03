let getNameAxios = async (idPost) => {

    try {
        let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        /*console.log(resPost.data.title);*/
        let resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        document.write(`${resUser.data.name} vive en ${resUser.data.address.city} y escribio el post ${idPost}: ${resPost.data.title}`);
    } catch (error) {
        console.log(error);
    }

}
getNameAxios(8)