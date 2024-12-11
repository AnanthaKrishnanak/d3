import React, { useCallback, useEffect } from "react";
import * as d3 from "d3";

import style from "../styles/tree.module.scss";

import { data } from "../mocks/data";

const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 30,
};

const rectNode = { width: 100, height: 12, textMargin: 0 };

type DataType = typeof data;

const createPathBetweenNodes = (d: d3.HierarchyPointLink<unknown>) => {
  const sourceCenterX = d.source.y + rectNode.width;
  const sourceCenterY = d.source.x + rectNode.height / 2;

  const targetCenterX = d.target.y;
  const targetCenterY = d.target.x + rectNode.height / 2;

  return `M ${sourceCenterX} ${sourceCenterY}
        C ${(sourceCenterX + targetCenterX) / 2} ${sourceCenterY},
          ${(sourceCenterX + targetCenterX) / 2} ${targetCenterY},
          ${targetCenterX} ${targetCenterY}`;
};

const reactNodeLabel = (d: any) => d.data.name;

export const Tree = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const svgDomRef = React.useRef<SVGSVGElement>(null);
  const rootRef = React.useRef<d3.HierarchyNode<DataType>>();
  const [filteredData, setFilteredData] = React.useState<DataType>(data);

  const height =
    (containerRef.current?.clientHeight || 900) - margin.bottom - margin.top;
  const width =
    (containerRef.current?.clientWidth || 900) - margin.left - margin.right;

  const setUpSvg = useCallback(() => {
    if (!svgDomRef.current) return;

    d3.select(svgDomRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgDomRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 5])
      .on("zoom", function (event) {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    svg.call(zoom.transform, d3.zoomIdentity.translate(100, height * 0.04));

    return g;
  }, [height, width]);

  useEffect(() => {
    const root = d3.hierarchy(filteredData);
    rootRef.current = root;

    const tree = d3.tree().size([height, width]);
    const links = tree(root).links();
    const nodes = tree(root).descendants();

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = setUpSvg();
    svg
      ?.selectAll("path")
      .data(links)
      .enter()
      .append("path")
      .attr("d", createPathBetweenNodes);

    const node = svg
      ?.selectAll("node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${+d.y}, ${+d.x})`);

    node
      ?.append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("height", rectNode.height)
      .attr("width", rectNode.width)
      .attr("class", "rectNodeLabel")
      .on("click", (event, d) => {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      });

    //to show the %
    node
      ?.append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("height", rectNode.height)
      .attr("width", 20) //to show %
      .attr("fill", colorScale);

    //to show the labels
    node?.append("text").text(reactNodeLabel)?.attr("dy", -8);
  }, [height, setUpSvg, width]);

  return (
    <div className={style.treeContainer} ref={containerRef}>
      <svg ref={svgDomRef} />
    </div>
  );
};
