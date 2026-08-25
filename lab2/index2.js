import { mkdir , rm} from "fs/promises";

// await mkdir("uploads");
// await mkdir("uploads/images")

// await mkdir("docs/resume/data", {recursive:true})

// await rm("docs/resume/data", {recursive:true}); // removes only data folder
await rm("docs" , { recursive:true }); // removes mainfloder and sub folders also