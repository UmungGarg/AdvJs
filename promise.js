const posts=[];
let lastactivitytime =null;

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastactivitytime= new Date().getTime();
            resolve(lastactivitytime)
        }, 1000)
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0){
                const deletedPost = posts.pop();
                resolve(deletedPost);
            }
            else{
                reject("ERROR: NO POST FOUND");
            }
        }, 1000)
    })
}

Promise.all([createPost({title:'Post1'}),updateLastUserActivityTime()]).then(([cpresolve,upresolve]) => {
    console.log(cpresolve);
    console.log(upresolve)
})
.then(deletePost).then(deletedPost=>  {
    console.log('Deleted Post:', deletedPost);
    console.log('New Post:', posts)
})
    .catch(error => console.error(error));