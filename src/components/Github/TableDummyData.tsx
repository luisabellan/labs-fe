import React from "react";

const columns = [
  {
    title: "Github Handle",
    dataIndex: "ghhandle",
    key: "ghhandle",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render: (text: string) => <a href="www.google.com">{text}</a>,
  },
  {
    title: "Pull Requests Submitted",
    dataIndex: "prsSubmitted",
    key: "prsSubmitted",
  },
  {
    title: "Pull Requests Reviewed",
    dataIndex: "prsReviewed",
    key: "prsReviewed",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
];

const data = [
  {
    key: "1",
    ghhandle: "Rubius Hagrid",
    prsSubmitted: 32,
    prsReviewed: 32,
    comments: 22,
  },
  {
    key: "2",
    ghhandle: "James Potter",
    prsSubmitted: 42,
    prsReviewed: 42,
    comments: 22,
  },
  {
    key: "3",
    ghhandle: "Serious Black",
    prsSubmitted: 32,
    prsReviewed: 32,
    comments: 22,
  },
];

export { columns, data };
