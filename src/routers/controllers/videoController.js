export const trending = (req, res) => res.render("home");

export const see = (req,res) => res.render("watch");

export const search = (req,res) =>res.send("Search");
export const edit = (req,res) =>{
    return res.send("Edit");
}
export const deleteVideo = (req,res) =>{
    return res.send("Delete Video");
}
export const upload = (req,res) =>res.send("Upload");