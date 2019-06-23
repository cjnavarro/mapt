import React from "react";

import PDFViewer from 'mgr-pdf-viewer-react';

const PdfViewer = ({file}) => (
  <PDFViewer document={{file}}/>
);

export default PdfViewer;
