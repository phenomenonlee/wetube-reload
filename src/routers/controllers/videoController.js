let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = (req, res) => {
  //here we wiil add a video to the videos array
  //이곳에서 비디오를 비디오 array에 추가할 것이다.
  return res.redirect("/");
};
