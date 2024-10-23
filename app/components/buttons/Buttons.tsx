interface Ibuttons {
  varriant: "default-dark-button";
  text: string;
}

const Buttons = ({ varriant, text }: Ibuttons) =>
  varriant === "default-dark-button" ? (
    <>
      <button
        className={`
            text-xl             
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
            `}
      >
        {text}
      </button>
    </>
  ) : null;

export default Buttons;
