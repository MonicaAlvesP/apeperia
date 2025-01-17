import postsData from '../../mock/posts.json';
import s from './blog.module.scss';

export const Blog = () => {
  return (
    <section className={s.container}>
      <h1>Blog</h1>
      <div className={s.posts}>
        <div className={s.highlight}>
          <img src={postsData.posts[0].avatar} alt={postsData.posts[0].title} />
          <h2>{postsData.posts[0].title}</h2>
          <p>
            <strong>{postsData.posts[0].date}</strong> {postsData.posts[0].time}
          </p>
          <p>{postsData.posts[0].content}</p>
        </div>

        <div className={s.postList}>
          {postsData.posts.slice(1).map((post) => (
            <div key={post.id} className={s.post}>
              <h2>{post.title}</h2>
              <p>
                <strong>{post.date}</strong> {post.time}
              </p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
