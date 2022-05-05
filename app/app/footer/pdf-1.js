import { useState, useEffect, useContext } from "react";

export const Pdf1 = ({ link }) => {
  const { getItem } = useContext(AppContext);
  const ll = getItem("footer_modal_1_href");
  return <iframe src={ll} style={{ width: "100%", height: "100%" }} />;
};

// "https://docs.google.com/file/d/1xs8TerhQLZ5FHARyyIlxNduMc6K41aDX/preview"
// link={getItem("footer_modal_1_href")}
