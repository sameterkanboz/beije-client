import { useCart } from "@/context/sumContext";
import { Product } from "@/models/product";
import { Button, IconButton } from "@mui/material";
import { Icons } from "../icons/coreIcons";

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
    <div className="flex flex-row lg:flex-col items-start justify-between lg:justify-start rounded-lg w-full gap-2 shadow-lg p-6">
      <div>
        <span className="select-none mb-1 font-gordita font-medium text-[18px] leading-[140%] tracking-[-0.015em]">
          {header}
        </span>

        <span className="select-none font-normal text-sm leading-[1.375rem] text-black/60 flex">
          {products ? (
            products.length === 1 ? (
              <div key={products[0].product.product_name}>
                <p>
                  {products[0].quantity * 10} {products[0].product.product_name}
                </p>
              </div>
            ) : products.length === 2 ? (
              <div key="products-list">
                <p>
                  {products[0].quantity * 10} {products[0].product.product_name}{" "}
                  ve {products[1].quantity * 10}{" "}
                  {products[1].product.product_name}
                </p>
              </div>
            ) : products.length >= 3 ? (
              <div key="products-list">
                <p>
                  {products.slice(0, -1).map((product, index) => (
                    <span key={product.product.product_name}>
                      {product.quantity * 10} {product.product.product_name}
                      {index < products.length - 2 ? ", " : " ve "}
                    </span>
                  ))}
                  {products[products.length - 1].quantity * 10}{" "}
                  {products[products.length - 1].product.product_name}
                </p>
              </div>
            ) : null
          ) : (
            description
          )}
        </span>
      </div>
      <div>
        {products && (
          <>
            <div className="hidden lg:flex">
              <Button
                onClick={() => {
                  products.forEach((product) =>
                    removeCategoryFromCart(categoryId)
                  );
                }}
                variant="text"
                sx={{ borderRadius: "16px" }}
              >
                <span className="select-none font-bold capitalize">
                  {buttonText}
                </span>
              </Button>
            </div>
            <div className="lg:hidden">
              <IconButton
                onClick={() => {
                  products.forEach((product) =>
                    removeCategoryFromCart(categoryId)
                  );
                }}
                aria-label="delete"
                className="lg:hidden"
              >
                <Icons.trash />
              </IconButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TabCard;
