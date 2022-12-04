import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  orderBy,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { db } from "../firebase-config";

const NewsDetail = ({ setActive }) => {
  //   const userId = user?.uid;
  const { id } = useParams();
  //   const [loading, setLoading] = useState(false);
  const [news, setNews] = useState(null);
  //   const [news, setNews] = useState([]);
  //   const [tags, setTags] = useState([]);
  //   const [comments, setComments] = useState([]);
  //   let [likes, setLikes] = useState([]);
  //   const [userComment, setUserComment] = useState("");
  //   const [relatedBlogs, setRelatedBlogs] = useState([]);

  //   useEffect(() => {
  //     const getRecentBlogs = async () => {
  //       const newsRef = collection(db, "blogs");
  //       const recentNews = query(
  //         newsRef,
  //         orderBy("timestamp", "desc"),
  //         limit(5)
  //       );
  //       const docSnapshot = await getDocs(recentNews);
  //       setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //     };

  //     getRecentNews();
  //   }, []);

  useEffect(() => {
    id && getNewsDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //   if (loading) {
  //     return <Spinner />;
  //   }

  const getNewsDetail = async () => {
    // setLoading(true);
    // const newsRef = collection(db, "news");
    const docRef = doc(db, "news", id);
    const newsDetail = await getDoc(docRef);
    // const news = await getDocs(newsRef);
    // let tags = [];
    // news.docs.map((doc) => tags.push(...doc.get("tags")));
    // let uniqueTags = [...new Set(tags)];
    // setTags(uniqueTags);
    setNews(newsDetail.data());
    setActive(null);
  };

  //     const relatedBlogsQuery = query(
  //       blogRef,
  //       where("tags", "array-contains-any", blogDetail.data().tags, limit(3))
  //     );
  //     setComments(blogDetail.data().comments ? blogDetail.data().comments : []);
  //     setLikes(blogDetail.data().likes ? blogDetail.data().likes : []);
  //     const relatedBlogSnapshot = await getDocs(relatedBlogsQuery);
  //     const relatedBlogs = [];
  //     relatedBlogSnapshot.forEach((doc) => {
  //       relatedBlogs.push({ id: doc.id, ...doc.data() });
  //     });
  //     setRelatedBlogs(relatedBlogs);
  //     setActive(null);
  //     setLoading(false);
  //   };

  //   const handleComment = async (e) => {
  //     e.preventDefault();
  //     comments.push({
  //       createdAt: Timestamp.fromDate(new Date()),
  //       userId,
  //       name: user?.displayName,
  //       body: userComment,
  //     });
  //     toast.success("Comment posted successfully");
  //     await updateDoc(doc(db, "blogs", id), {
  //       ...blog,
  //       comments,
  //       timestamp: serverTimestamp(),
  //     });
  //     setComments(comments);
  //     setUserComment("");
  //   };

  //   const handleLike = async () => {
  //     if (userId) {
  //       if (blog?.likes) {
  //         const index = likes.findIndex((id) => id === userId);
  //         if (index === -1) {
  //           likes.push(userId);
  //           setLikes([...new Set(likes)]);
  //         } else {
  //           likes = likes.filter((id) => id !== userId);
  //           setLikes(likes);
  //         }
  //       }
  //       await updateDoc(doc(db, "blogs", id), {
  //         ...blog,
  //         likes,
  //         timestamp: serverTimestamp(),
  //       });
  //     }
  //   };

  //   console.log("relatedBlogs", relatedBlogs);
  return (
    <div>
      <div className="px-10 md:px-40">
        <div className="pt-20 pb-10">
          <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
            뉴스
          </span>
          <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
        </div>
        {/* <div
        className="news-title-box"
        style={{ backgroundImage: `url('${news?.imgUrl}')` }}
      > */}

        {/* </div> */}
        <div>
          <div>
            <div>
              <div>
                <span className="font-semibold text-3xl">{news?.title}</span>
                <span className="text-start">
                  <br />
                  {news?.timestamp.toDate().toDateString()}
                  {/* <Like handleLike={handleLike} likes={likes} userId={userId} /> */}
                </span>
                <div className="py-10 w-full flex justify-center">
                  <img src={news?.imgUrl} alt={news?.title} />
                </div>
                <p className="mb-20 text-[#666]">{news?.description}</p>
                {/* <div className="text-start">
                <Tags tags={blog?.tags} />
              </div> */}
                {/* <br />
              <div className="custombox">
                <div className="scroll">
                  <h4 className="small-title">{comments?.length} Comment</h4>
                  {isEmpty(comments) ? (
                    <UserComments
                      msg={
                        "No Comment yet posted on this blog. Be the first to comment"
                      }
                    />
                  ) : (
                    <>
                      {comments?.map((comment) => (
                        <UserComments {...comment} />
                      ))}
                    </>
                  )}
                </div>
              </div> */}
                {/* <CommentBox
                userId={userId}
                userComment={userComment}
                setUserComment={setUserComment}
                handleComment={handleComment}
              /> */}
              </div>
              {/* <div className="col-md-3">
              <div className="blog-heading text-start py-2 mb-4">Tags</div>
              <Tags tags={tags} />
              <FeatureBlogs title={"Recent Blogs"} blogs={blogs} />
            </div> */}
            </div>
            {/* <RelatedBlog id={id} blogs={relatedBlogs} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
