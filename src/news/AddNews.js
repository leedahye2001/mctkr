import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
};
const News = ({ user }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { title, description } = form;

  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description) {
      //   if (!id) {
      try {
        await addDoc(collection(db, "news"), {
          ...form,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
        });
        // toast.success("글이 성공적으로 게시되었습니다!");
      } catch (err) {
        console.log(err);
      }
    }
    //   else {
    //     try {
    //       await updateDoc(doc(db, "news", id), {
    //         ...form,
    //         timestamp: serverTimestamp(),
    //         author: user.displayName,
    //         userId: user.uid,
    //       });
    //       toast.success("글이 성공적으로 수정되었습니다!");
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // } else {
    //   return toast.error("모든 필드는 필수 입력 사항입니다.");
    // }

    navigate("/news");
  };

  return (
    <div>
      <div className="flex flex-rows-1 pb-40">
        <div className="px-10 sm:px-20 w-full h-full">
          {/* top */}
          <div>
            <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
              뉴스
            </span>
            <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
            <span className="text-[#000] text-base sm:text-2xl font-light">
              “MCT의&nbsp;
              <span className="font-bold">뉴스 및 보도자료</span>를 소개합니다.”
            </span>
          </div>
          {/* main contents */}
          <div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="my-10">
                  <label class="text-xl text-gray-600">
                    제목
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    placeholder="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-8">
                  <label class="text-xl text-gray-600">
                    내용 <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    className="border-2 border-gray-300 p-2 h-80 w-full"
                    placeholder="내용을 입력해주세요."
                    name="description"
                    value={description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="border border-[#11264F] bg-[#11264F]
                             hover:bg-blue-900 w-full p-4 my-5 text-white"
                    type="submit"
                    disabled={progress !== null && progress < 100}
                  >
                    게시하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
