import { Categories, PostCard, PostWidget } from '../Components';
import { FeaturedPosts } from '../sections/index';
import { getPosts } from '../services';

// const posts =[
//   {title: 'Exploring the Potential of Jio Cloud Gaming: A Revolutionary Gaming Experience', 
//   excerpt: 'Jio Cloud Gaming has emerged as a revolutionary player, providing gamers with an immersive and seamless gaming experience.'
// }
// ]

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}