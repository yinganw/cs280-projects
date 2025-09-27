import Link from 'next/link';

export default function Home() {

  const projects = [
    {
      id: "proj0",
      title: "Project 0: Becoming Friends with Your Camera",
      description: "Selfies, perspective, and dolly zoom exercises",
      href: "/proj0",
    },
    {
      id: "proj1",
      title: "Project 1: Images of the Russian Empire",
      description: "Colorizing the Prokudin-Gorskii photo collection",
      href: "/proj1",
    },
    {
      id: "proj2",
      title: "Project 2: Fun with Filters and Frequencies!",
      description: "Filters, frequencies, and blending images",
      href: "/proj2",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-6 space-y-8">
      {/* Title */}
      <div className='text-center'>
        <h1 className="text-3xl font-bold text-center">CS 280A Projects</h1>
        <h2>Yingan Wang</h2>
        <h2>Fall 2025</h2>
      </div>

      {/* Project Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}