import BlogSingleCard from "/app/components/Shared/BlogSingleCard";

export default function ProfileStory({ contents }) {
  return (
    <>
      <div className="px-[10%] pt-5">
        <h1 className="text-5xl text-center font-bold">Stories</h1>
        <div className="my-10 grid grid-cols-3 gap-5">
          {contents.map((content, index) => (
            <div className="overflow-hidden shadow-md rounded-md">
              <BlogSingleCard key={index} content={content} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
