const AvailableStyles = () => {
  return (
    <div>
      {/* Centered "RESULTS" Text */}
      <div className="flex justify-center mt-4">
        <h2
          className="text-2xl text-black dark:text-white"
          style={{ fontFamily: "Calibri", fontSize: "40px" }}
        >
          AVAILABLE STYLES
        </h2>
      </div>
      <br />
      <br />
      {/* Loading Button */}
      <button
        type="button"
        className="bg-black text-white font-bold py-2 px-4 rounded inline-flex items-center"
        disabled
        style={{ marginLeft: "42%", marginBottom: "40px" }}
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        STYLING YOUR EVENT
      </button>
    </div>
  );
};

export default AvailableStyles;
