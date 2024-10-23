interface Ibuttons {
  variant: "default-dark-button";
  text: string;
  buttonTextSize?: "text-sm" | "text-normal" | "text-xl";
}

const Buttons = ({ variant, text, buttonTextSize }: Ibuttons) =>
  variant === "default-dark-button" ? (
    <button
      className={`
                        
            text-white
            hover:text-black
            bg-black 
            hover:bg-skilled-green-30 
            font-bold 
            px-3 
            py-1
            ms-1
            rounded-md
            transition-all ease-in-out duration-300
          ${
            buttonTextSize === "text-sm"
              ? "text-sm"
              : buttonTextSize === "text-xl"
              ? "text-xl"
              : buttonTextSize === "text-normal"
              ? "text-base"
              : ""
          }  
      `}
    >
      {text}
    </button>
  ) : null;

export default Buttons;
