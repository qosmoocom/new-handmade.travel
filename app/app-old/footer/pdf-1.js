export const Pdf1 = ({ link }) => {
  return (
    <iframe
      id="pdf1"
      src={link}
      // style={{ width: "750px", height: "100%" }}
      width="100%"
      height="100%"
    ></iframe>
  );
};

// "https://docs.google.com/file/d/1xs8TerhQLZ5FHARyyIlxNduMc6K41aDX/preview"
// link={getItem("footer_modal_1_href")}
