import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetails";
import ApprovalCard from "./approvalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail text="forsenW" timeAgo="4:20AM" />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail text="forsenW" timeAgo="3:24AM" />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail text="forsenW" timeAgo="4:20PM" />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail text="forsenW" timeAgo="7:22PM" />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail text="forsenW" timeAgo="1:11AM" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
