import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProduct = () => {
  return (
    <Link href={"/"}>
      <div className="py-3 border-t flex bg-white shadow-md my-1">
        <Image
          alt="related"
          height={100}
          width={100}
          src={
            "https://www.startech.com.bd/image/cache/catalog/television/rowa/32s52/32s52-02-74x74.webp"
          }
        />

        <div className="ml-2">
          <p>Dell E2016HV 19.5 LED Monitor</p>
          <p>tadjf</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProduct;
