import { writeFile } from "fs/promises";

for (let i = 1; i <= 1000; i++) {
    await writeFile("big.txt", `This is line number ${i}\n`, { flag: "a" });
}
    
