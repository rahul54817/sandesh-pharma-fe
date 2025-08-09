import { createContext, useContext, useState } from "react";
import { blogPosts, type IBlogPost, type IComment } from "../types/blog";

interface BlogContextType {
  posts: IBlogPost[];
  likePost: (id: number) => void;
  addComment: (postId: number, comment: Omit<IComment, 'id' | 'date'>) => void;
}

const BlogContext = createContext<BlogContextType>({
  posts: [],
  likePost: () => {},
  addComment: () => {},
});

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<IBlogPost[]>(blogPosts);

  const likePost = (id: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addComment = (postId: number, comment: Omit<IComment, 'id' | 'date'>) => {
    const newComment: IComment = {
      ...comment,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <BlogContext.Provider value={{ posts, likePost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);