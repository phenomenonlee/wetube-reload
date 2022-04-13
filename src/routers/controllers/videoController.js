import Video from "../../models/Video";
/*
Video.find({}, (error, videos) => {
  if(error){
    return.res.render("server-error")
  }
  return res.render("home", {pageTitle: "home", videos})
});
console.log("finished")
 */

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const id = req.params.id;
  return res.render("watch", {
    pageTitle: `Watching`,
  });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};
