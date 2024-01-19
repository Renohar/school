import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(request) {

    const formData = await request.formData();
  
    const file = formData.get("file");
    
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const relativeUploadDir = '/uploads';
    const uploadDir = join(process.cwd(), "public", relativeUploadDir);
  
    
    try {
      
      const filename = file.name;
      await writeFile(`${uploadDir}/${filename}`, buffer);
    
    } catch (e) {
       console.log(e)
    }
    
  }
  