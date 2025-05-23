import { BlogPosts } from "app/components/posts"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Software developer with intrests in solving problems using technology. I'm currently working on a project for my college to simplify their reconciliation process.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
