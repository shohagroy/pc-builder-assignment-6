import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { productId } = req.query;

      const filePath = path.join(process.cwd(), "db", "data.json");
      const data = fs.readFileSync(filePath, "utf8");
      const products = JSON.parse(data);

      const product = products.find((product) => product.id === productId);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
      }

      res
        .status(200)
        .json({ message: "Product received successfully", data: product });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // For other HTTP methods, return an error
    res.status(405).json({ message: "Method not allowed" });
  }
}
