import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import PostCard from '@/components/PostCard';

const mockPosts = [
  {
    id: 1,
    title: 'Announcing React Query v5: The Future of Data Fetching',
    description: 'After months of development and community feedback, we are excited to announce the release of React Query v5 with amazing new features including...',
    repoName: 'tanstack/query',
    repoLanguage: 'TypeScript',
    repoStars: 1247,
    repoForks: 234,
    tags: ['react', 'typescript', 'data-fetching'],
    votes: 142,
    comments: 28,
    author: 'tannerlinsley',
    timeAgo: '2h ago',
  },
  {
    id: 2,
    title: 'Building a Modern CLI Tool with Node.js and TypeScript',
    description: 'Learn how to create professional command-line interfaces using the latest tools and best practices. This guide covers everything from...',
    repoName: 'user/awesome-cli',
    repoLanguage: 'TypeScript',
    repoStars: 892,
    repoForks: 156,
    tags: ['nodejs', 'cli', 'typescript'],
    votes: 98,
    comments: 15,
    author: 'devmaster',
    timeAgo: '5h ago',
  },
  {
    id: 3,
    title: 'Open Source Dashboard for Kubernetes Monitoring',
    description: 'A beautiful, real-time dashboard for monitoring your Kubernetes clusters. Features include pod metrics, resource usage, logs...',
    repoName: 'kube-dash/dashboard',
    repoLanguage: 'Go',
    repoStars: 2156,
    repoForks: 445,
    tags: ['kubernetes', 'devops', 'monitoring'],
    votes: 201,
    comments: 42,
    author: 'k8s-enthusiast',
    timeAgo: '1d ago',
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      <RightSidebar />

      {/* Main Content */}
      <main className="lg:ml-64 xl:mr-80 pt-24 pb-12 px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
