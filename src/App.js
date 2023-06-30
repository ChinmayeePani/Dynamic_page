import { useState } from "react";
import "./App.css";
import { IoIosBarcode } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { WiMoonWaxingCrescent2 } from "react-icons/wi";

function App() {
  const [isDarkModeOn, setisDarkModeOn] = useState(false);

  return (
    <div className={`app ${isDarkModeOn && 'darkMode'}`}>
      <div className="navbar">
        <IoIosBarcode className="logo"/>
        <div className="icons">
        <BsFillSunFill/> 
        </div>
        
        <div
          className={`outer ${isDarkModeOn ? "switch-on" : "switch-off"}`}
          onClick={() => setisDarkModeOn(!isDarkModeOn)}
        > 
        
          <div className="inner" />
        </div>
        <div className="moon">
          <WiMoonWaxingCrescent2/>
        </div>
      </div>

      <div className={`story ${isDarkModeOn && 'storyDarkMode'}`}>
        <h1 className={`heading ${isDarkModeOn && 'headingDarkMode'}`}>The Bequest ~</h1>
        <p>
          A man died far from his home, and in the portion of his will which he had available for
          bequest, he left in these words: ‘Let the community where the land is situated take what
          they wish for themselves, and let them give that which they wish to Arif the Humble.Now
          Arif was a young man at the time, who had far less apparent authority than anyone in the
          community. Therefore the elders took possession of whatever they wanted from the land
          which had been left, and they allocated to Arif a few trifles only, which nobody else
          wanted.Many years later Arif, grown to strength and wisdom, went to the community to claim
          his patrimony. ‘These are the objects which we have allocated to you in accordance with
          the Will,’ said the elders. They did not feel that they had usurped anything, for they had
          been told to take what they wished. But, in the middle of the discussion, an unknown man
          of grave countenance and compelling presence appeared among them. He said: ‘The meaning of
          the Will was that you should give to Arif that which you wished for yourselves, for he can
          make the best use of it.In the moment of illumination which this statement gave them, the
          elders were able to see the true meaning of the phrase, ‘Let them give that which they
          wish to Arif ’, ‘Know,’ continued the apparition, ‘that the testator died unable to
          protect his property, which would, in case of his making Arif his legatee in an obvious
          sense, have been usurped by this Community. At the very least it would have caused
          dissension. So he entrusted it to you, knowing that if you thought that it was your own
          property you would take care of it. Hence he made a wise provision for the preservation
          and transmission of this treasure.
        </p>
      </div>
    </div>
  );
}

export default App;
