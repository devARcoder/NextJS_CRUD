// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// interface Props {
//   id: string;
//   title: string;
//   description: string;
// }

// const EditTopicForm = ({ id, title, description }: Props) => {
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);

//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`/api/topics/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ newTitle, newDescription }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to update topic");
//       }

//       router.push("/");
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//       <input
//         type="text"
//         className="border border-slate-500 px-8 py-2"
//         value={newTitle}
//         onChange={(e) => setNewTitle(e.target.value)}
//       />

//       <textarea
//         className="border border-slate-500 px-8 py-2"
//         value={newDescription}
//         onChange={(e) => setNewDescription(e.target.value)}
//       />

//       <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//         Update Topic
//       </button>
//     </form>
//   );
// };

// export default EditTopicForm;

"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
const EditTopicForm = ({id, title, description}:{id: string, title: string, description: string}) => {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription})
      })

      if(!res.ok){
        throw new Error("Failed to Updated");
        
      }

      router.refresh()
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
      onChange={(e)=> setNewTitle(e.target.value)}
      value={newTitle}
        type="text"
        className="border border-slate-500 px-8 py-2"
      />
      <input
      onChange={(e)=> setNewDescription(e.target.value)}
      value={newDescription}
        type="text"
        className="border border-slate-500 px-8 py-2"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm