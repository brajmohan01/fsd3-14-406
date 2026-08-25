import fs from "fs/promises";

const writeData = async () =>{
    try{
        console.log("about to write ...");
        await fs.writeFile("data.txt", "Hello World");
        console.log("Data written successfully");
    } catch (error) {
        console.error("Error writing data:", error);    
    }
}
const f1 = () =>{
    console.log("f1")
};
const f2 = () =>{
    console.log("f2")
};
const f3 = () =>{
    console.log("f3")
};

const main= ()=>{
    console.log("main");
    setTimeout(f1, 0);
    // setInterval(f2, 1000);
    setImmediate(f2);
    process.nextTick(f3);

    writeData();

    console.log("main end");
}
main();

// Promise -> 