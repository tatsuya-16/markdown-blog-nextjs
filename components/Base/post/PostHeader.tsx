// import Avatar from "./avatar";
// import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./PostTitle";
import { type Author } from "../../../app/interfaces/author";

type Props = {
  title: string;
//   coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, date, author }: Props) {
  return (
    <div className="mx-auto text-center">
        <PostTitle>{title}</PostTitle>
        <h3>{author.name}</h3>
        <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
        </div>
    </div>
  );
}