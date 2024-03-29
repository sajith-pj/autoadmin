const PanelActionButton = ({ buttons = [] }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button
          {...button}
          className={`${button.className} whitespace-nowrap text-[10px] md:text-[14px] px-3 py-2 md:px-4 `}
          type="button"
          key={index}
        >
          {button?.displayText}
        </button>
      ))}
    </>
  );
};

export default PanelActionButton;
