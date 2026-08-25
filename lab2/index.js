import { writeFile , readFile, appendFile} from "fs/promises";

// await writeFile('stud.txt', 'Ravikant Singh chauhan\nRoll NO: 82');
// console.log("File written");

// const data = await readFile("stud.txt" , "utf-8");
// console.log(`File contents: ${data}`);

const addContent = async (fname, content)=>{
    await writeFile(fname , content);
    console.log("File written");
    

}
const readContent = async (fname) =>{
    const data = await readFile(fname , 'utf-8');
    return data;
}
const appendData = async (fname , content)=>{
    await appendFile(fname ,"\n"+ content);
    console.log("file appened");
    
}
await addContent('notes.txt', 'FS is easy in JS');
console.log("content: " , await readContent("notes.txt"));
await appendData("notes.txt" , "this is appened data");
console.log("content: " , await readContent("notes.txt"));