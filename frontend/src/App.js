import { useState } from 'react';
// import SignIn from './components/SignInComponent/SignIn';
// import SignUp from './components/SignUpComponent/SignUp';
// {/* {component ? <SignIn setComponent={setComponent} /> : <SignUp setComponent={setComponent} />} */}
// {/* {component ? <SignIn setComponent={setComponent} /> : <SignUp setComponent={setComponent} />} */}
import instaName from './assets/instaName.png'
import instaStory from './assets/instaStory.png'
import instaPic from './assets/mypic.jpg'
import commentSvg from './assets/comment-solid.svg'
import likeSvg from './assets/heart-solid.svg'
import shareSvg from './assets/paper-plane-solid.svg'
function App() {
  //const [component, setComponent] = useState(true)
  const [sbox, setSbox] = useState('none')
  return (
    <div className='main-container'>
      <header className="header">
        <img src={instaName} alt="Instagram Logo" />
        <div className='search-div' style={{ display: sbox }}>
          <span onClick={() => { setSbox('none') }}>X</span>
          <input type="text" placeholder="Search"></input>


        </div>
        <div className="header-icons">
          <span onClick={() => { setSbox("block") }}>s</span>
          <span>m</span>
        </div>
      </header>

      <div className="story-wrapper">

        <div className="story-bar">
          {/* <!-- Sample story --> */}
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>
          <div className="story">
            <div className="story-img">
              <img src={instaStory} alt="User Story" />
            </div>
            <span className="story-username">username</span>
          </div>

          {/* <!-- Repeat more stories here --> */}

        </div>
      </div>


      {/* <!-- Sample post --> */}
      <div className='post-container'>
        <div className="post">
          <div className="post-header">
            <img src={instaPic} alt="User Profile" />
            <span className="username">username</span>
          </div>
          <img src={instaPic} alt="Post Image" className="post-image" />
          <div className="post-actions">
            <img src={likeSvg} />
            <img src={commentSvg} />
            <img src={shareSvg} />
          </div>
          <div className="post-caption">
            <span className="username">username</span>  Caption for the post Caption for the post Caption for the post Caption for the post Caption for the post Caption for the postCaption for the post Caption for the post Caption for the post vCaption for the post.
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <img src={instaPic} alt="User Profile" />
            <span className="username">username</span>
          </div>
          <img src={instaPic} alt="Post Image" className="post-image" />
          <div className="post-actions">
            <button className="action-btn">Like</button>
            <button className="action-btn">Comment</button>
            <button className="action-btn">Share</button>
          </div>
          <div className="post-caption">
            <span className="username">username</span> Caption for the post.
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <img src={instaPic} alt="User Profile" />
            <span className="username">username</span>
          </div>
          <img src={instaPic} alt="Post Image" className="post-image" />
          <div className="post-actions">
            <button className="action-btn">Like</button>
            <button className="action-btn">Comment</button>
            <button className="action-btn">Share</button>
          </div>
          <div className="post-caption">
            <span className="username">username</span> Caption for the post.
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <img src={instaPic} alt="User Profile" />
            <span className="username">username</span>
          </div>
          <img src={instaPic} alt="Post Image" className="post-image" />
          <div className="post-actions">
            <button className="action-btn">Like</button>
            <button className="action-btn">Comment</button>
            <button className="action-btn">Share</button>
          </div>
          <div className="post-caption">
            <span className="username">username</span> Caption for the post.
          </div>
        </div>
        {/* <!-- Repeat more posts here --> */}
      </div>

      <footer className="bottom-navbar">
        <i className="fas fa-home">h</i>
        <i className="far fa-plus-square">+</i>
        <i className="far fa-heart">@</i>
        <i className="far fa-user">u</i>
      </footer>
    </div>
  );
}

export default App;
