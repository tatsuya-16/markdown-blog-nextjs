type Props = {
  title: string;
  date: string;
  author: string;
};

export function BlogHeader({ title, date, author }: Props) {
  return (
    <div className="mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 mt-8 text-center">{title}</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tighter leading-tight md:leading-none mb-4 mt-2 text-center">{author}</h2>
        <h3>{date}</h3>
    </div>
  );
}