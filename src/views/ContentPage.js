import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Highlighter from "../components/Highlighter";
import Masonry from "react-masonry-css";
import "../asset/styles/ContentPage.scss";
import docRouter from "../data/doc-router";

function ContentPage({ match }) {
  const { params } = match;
  const [meta, setMeta] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // match.params
        const document = docRouter[params.name];
        const dataSrc = require(`../data/${document.file}`);
        const response = await fetch(dataSrc);
        const text = await response.text();
        const arrayText = text.split(/\r\n|\r|\n/g);
        const contentArray = [];
        let start = 0;
        let end = 0;
        arrayText.forEach((e, i) => {
          if (i !== 0 && e === "---") {
            setMeta(arrayText.slice(0, i + 1));
          }
          if (e.slice(0, 3) === "## ") {
            if (start === 0) {
              start = i;
              // end = i - 1;
            } else {
              end = i - 1;
              contentArray.push(arrayText.slice(start, end).join("\n"));
              start = i;
            }
          }
          if (i === arrayText.length - 1) {
            end = i - 1;
            contentArray.push(arrayText.slice(start, end).join("\n"));
          }
        });
        // setMeta(contentArray.shift());
        setContent(contentArray);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [params]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  };

  return (
    <div>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h1 className="page-title">
            {meta[1]
              ? meta[1].slice(meta[1].indexOf(":") + 2, meta[1].length)
              : ""}
          </h1>
        </Col>
      </Row>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {content.map((item, index) => {
          return (
            <div className="grid-item">
              <ReactMarkdown
                source={item}
                key={index}
                renderers={{ code: Highlighter }}
                className={"my-masonry-grid_column"}
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default ContentPage;
