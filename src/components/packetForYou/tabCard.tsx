import { useCart } from "@/context/sumContext";
import { Product } from "@/models/product";
import { Button } from "@mui/material";

interface TabCardProps {
  header: string;
  description: string | JSX.Element[];
  products?: { product: Product; quantity: number }[];
  buttonText: string;
  categoryId: number;
}

const TabCard = ({
  header,
  description,
  buttonText,
  products,
  categoryId,
}: TabCardProps) => {
  const { removeCategoryFromCart } = useCart();
  return (
    <div className="flex flex-col items-start rounded-lg w-full gap-2 shadow-lg p-6">
      <span className="select-none mb-1 font-gordita font-medium text-[18px] leading-[140%] tracking-[-0.015em]">
        {header}
      </span>

      <span className="select-none font-normal text-sm leading-[1.375rem] text-black/60 flex">
        {products
          ? products.map((product) => (
              <div key={product.product.product_name}>
                <p>
                  {product.quantity * 10} {product.product.product_name}
                </p>
              </div>
            ))
          : description}
      </span>
      {products && (
        <Button
          onClick={() => {
            products.forEach((product) => removeCategoryFromCart(categoryId));
          }}
          variant="text"
          sx={{ borderRadius: "16px" }}
        >
          <span className="select-none font-bold capitalize">{buttonText}</span>
        </Button>
      )}
    </div>
  );
};

export default TabCard;
