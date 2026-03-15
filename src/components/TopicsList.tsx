import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// Fetch topics safely
const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: "no-store"
    });

    if (!res.ok) throw new Error("Failed to fetch topics");

    return await res.json(); // could be array or {topics: [...]}
  } catch (error) {
    console.log("Error loading topics:", error);
    return []; // ✅ fallback to empty array
  }
};

const TopicsList = async () => {
  const data = await getTopics();

  // Handle if API returns array directly or object with 'topics'
  const topics = Array.isArray(data) ? data : data?.topics || [];

  return (
    <>
      {topics.length === 0 && (
        <p className="text-center text-gray-500 mt-5">No topics found</p>
      )}

      {topics.map((t: any) => (
        <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
