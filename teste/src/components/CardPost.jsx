import Link from "next/link"

function CardPost({ post }) {
    return (
        <div>
            <div key={post.id} className="bg-gray-800 p-4 my-2 rounded-md">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <Link href={`/posts/${post.id}`}  className="text-sm">Acessar detalhes</Link>
            </div>
        </div>
    )
}

export default CardPost
