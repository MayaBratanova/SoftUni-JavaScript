function solve() {
    class Post {
        constructor(title, content){
            this.title = title
            this.content = content
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content)
            this.likes = Number(likes)
            this.dislikes = Number(dislikes)
            this.comments = []
        }
        getComment(){
            return this.comments
        }
        addComment(comment){
            let pushArr = this.getComment().push(comment)
            return pushArr
        }
        toString(){
            let result = this.likes-this.dislikes
            if(this.comments.length===0){
                return super.toString() + `\nRating: ${result}`
            }
            else{
                let str = super.toString() + `\nRating: ${result}\nComments:`
                for (const el of this.comments) {
                    str+= `\n * ${el}`
                }
                return str
            }

        }
    }
    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }

        view(){
            this.views++
            return this
        }
        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return{Post, SocialMediaPost, BlogPost}
}

let post = new BlogPost('news', 'everyday', 5)
post.view()
console.log(post + '');
