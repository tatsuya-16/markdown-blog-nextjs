import { Badge } from "@/components/ui/badge"
import { Blog } from "../../../app/interfaces/blog"
import Link from 'next/link';

type BlogCardProps = {
    blogData: Blog;
};

const BlogList = ({ blogData }: BlogCardProps) => {
    return (
    <div style={{ padding: '1rem', paddingLeft: '3rem', borderBottom: '1px solid #eaeaea' }}>
        <Link href={`/blogs/${blogData.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
            {blogData.title}
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            {blogData.tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
          <div style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            {blogData.date}
          </div>
          <p style={{ margin: '0' }}>{blogData.abstract}</p>
        </Link>
    </div>
    )
  }
  
  export default BlogList;