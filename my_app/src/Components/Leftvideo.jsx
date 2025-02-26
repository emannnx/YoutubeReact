import React from 'react'
import Video2 from '../assests/Video2.mp4'
import profileImg from '../assests/profile.jpg'

const Leftvideo = () => {
  return (
    <div className='bodeylefta'>
    <div className="bodeyleftainner">
         <video src={Video2} className='vidoin' controls></video>
         <div className="cap">
            <h1>Ginny and Geogia</h1>
            <div className='capp'>
                <div className='capppp'>
                <img src={profileImg} alt="profile" className="cationimgg" />
                </div>
                <div className='Cpa'>
                <div>    <h3>Netflix</h3>
                <p>755k subscriber  </p></div>
                <div> <button>Subscribe</button></div>
                </div>
            </div>
         </div>
         <div className='showmore'>
              <div style={{width: '95%'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod placeat deserunt sit, nobis perferendis sint culpa alias delectus voluptate ut soluta. Voluptate recusandae laudantium nesciunt, voluptatibus obcaecati error! Consequatur voluptas obcaecati deserunt vel cum commodi, dolores autem, et est distinctio cupiditate maiores, nisi itaque ipsa. Nam explicabo quas quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod placeat deserunt sit, nobis perferendis sint culpa alias delectus voluptate ut soluta. Voluptate recusandae laudantium nesciunt, voluptatibus obcaecati error! Consequatur voluptas obcaecati deserunt vel cum commodi, dolores autem, et est distinctio cupiditate maiores, nisi itaque ipsa. Nam explicabo quas quae!
              </div>
            </div>

            <div className="comments">
                <h2>4,187 Comments</h2>
                <div>
                <div className='cappppp'>
                <img src={profileImg} alt="profile" className="cationimggg" />
                <input type="text" name="" id="" className='commentsin'  placeholder='Add a comment...'/>
                </div>
                    <div className='commmmm'>
                    <img src={profileImg} alt="profile" className="cationimggg" />
                    <div className='scre'>
                      <h3>@diepreyekunegha3250
                      9 months ago</h3>
                      <p>Who makes the best jellof rice? “Mothers!!”😂😂😂😂</p>
                    </div>
                    </div>
                    <div className='commmmm'>
                    <img src={profileImg} alt="profile" className="cationimggg" />
                    <div className='scre'>
                      <h3>@diepreyekunegha3250
                      9 months ago</h3>
                      <p>Who makes the best jellof rice? “Mothers!!”😂😂😂😂</p>
                    </div>
                    </div>
                    <div className='commmmm'>
                    <img src={profileImg} alt="profile" className="cationimggg" />
                    <div className='scre'>
                      <h3>@diepreyekunegha3250
                      9 months ago</h3>
                      <p>Who makes the best jellof rice? “Mothers!!”😂😂😂😂</p>
                    </div>
                    </div>
                    <div className='commmmm'>
                    <img src={profileImg} alt="profile" className="cationimggg" />
                    <div className='scre'>
                      <h3>@diepreyekunegha3250
                      9 months ago</h3>
                      <p>Who makes the best jellof rice? “Mothers!!”😂😂😂😂</p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Leftvideo
