import React, {useEffect, useRef, useState} from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import {Spin} from "antd"

/* eslint-disable */
pdfjs.GlobalWorkerOptions.workerSrc = "/static/js/pdf.worker.js";

function PdfViewer({showPage=false, fileUrl, pageHeight}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(0);

  const wrapRef = useRef(null);
  useEffect(()=>{
    let wrap = wrapRef.current?.getBoundingClientRect() || {};
    setPageWidth(wrap.width|| 500);
  }, []);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onLoadError(error) {
    console.log(error)
  }

  return (
    <div className={"pdf-wrap"} ref={wrapRef} style={{
      height: pageHeight || "auto"
    }}>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
        loading={<Spin size={"large"}></Spin>}
        error={<div style={{
          width: "100%",
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#eeeded"
        }}>
          File load fail...
        </div>}
      >
        <Page pageNumber={pageNumber} width={pageWidth}  loading={<Spin size={"large"}></Spin>}/>
      </Document>
      {
        showPage ? <p>Page {pageNumber} of {numPages}</p> : null
      }
    </div>
  );
}

export default PdfViewer;
