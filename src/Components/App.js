//   /* <link
//  rel="stylesheet"
//  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
// ></link>; */
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Leah"
          timeAgo="Today at 5:00PM"
          profileImage={faker.image.image()}
          text="Great blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Amy"
          timeAgo="Yesterday at 10:03AM"
          profileImage={faker.image.image()}
          text="Totally cool!!!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ethan"
          timeAgo="Yesterday at 9:34AM"
          profileImage={faker.image.image()}
          text="Learning React is fun."
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
