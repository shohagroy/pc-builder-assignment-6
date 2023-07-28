import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "db", "processor.json");
      const data = fs.readFileSync(filePath, "utf8");
      const products = JSON.parse(data);

      res
        .status(200)
        .json({ message: "Products received successfully", data: products });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // For other HTTP methods, return an error
    res.status(405).json({ message: "Method not allowed" });
  }
}