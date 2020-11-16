import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
 
const App=()=>{
      return(
          <div className="ui container comments">
                  <ApprovalCard>
                        <div>
                              <h4>Warning !</h4>
                              are u sure u want to do this?
                        </div>
                  </ApprovalCard>
                  <ApprovalCard>
                        <CommentDetail
                              author="fati" 
                              timeAgo="Today at 4:45pm" 
                              content="Nice blog face" 
                              avatar={faker.image.avatar()}
                        />
                  </ApprovalCard>

                  <ApprovalCard>
                        <CommentDetail
                              author="amin" 
                              timeAgo="Today at 2:00am" 
                              content="Nice blog face"
                              avatar={faker.image.avatar()}
                        />
                  </ApprovalCard>
                  
                  <ApprovalCard>
                        <CommentDetail 
                              author="taraneh" 
                              timeAgo="Today at 3:pm"
                              content="Nice blog face"
                              avatar={faker.image.avatar()} 

                        />
                  </ApprovalCard>
          </div>
      );
};
ReactDOM.render(<App/>,document.querySelector('#root'));