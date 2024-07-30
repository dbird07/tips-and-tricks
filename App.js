import logo from './logo.svg';
import './App.css';
import holder from "./placeHolder.jpg"
import Tip from "./Tip.js"
function App() {
  const data = [{image:holder,topic:"Audio Quality",text:"Prioritize crystal-clear audio by using a high-quality microphone to eliminate distortions and ensure your voice resonates clearly with your audience."},{image:holder,topic:"Noise Reduction",text:" Create a distraction-free environment by closing windows and doors to minimize ambient  noise interference, allowing your message to be heart without disruption."},{image:holder,topic:"Optimal Lighting", text:"Position yourself facing a natural light source or use artificial lighting in front of you to illuminate your face evenly, avoiding shadows and ensuring your expressions are visible and engaging."},{image:holder,topic:"Background Selection", text:"Choose a clean and uncluttered background to direct focus solely on your presentation content, or utilize a virtual background that complements your topic without distracting viewers."},{image:holder,topic:"Camera Alignment", text:"Align your camera directly with your eye level to maintain a professional and engaging presence, establishing a direct connection with your audience."},{image:holder, topic:"Posture Perfection", text:"Maintain a confident and attentive posture by sitting upright with shoulders back, exuding professionalism and enhancing your credibility as a speaker."},{image:holder,topic:"Consistent Practice", text: "Dedicate time to rehearse your presentation multiple times, refining your delivery, timing, and transitions to ensure seamless and impactful communication with your audience."}]
  
  const tips = data.map(tip=> {return <Tip image = {tip.image} topic = {tip.topic} text = {tip.text} />})
  
  return (
    <div className="App">
      <header> 
        <h1>Tips and Tricks for Producing <br/>
        a High-Quality Presentation </h1>
       </header>
       
      <p id = "info"> From crafting engaging content to perfecting your delivery techniques, each suggestion is tailored to help you captivate 
your audience and convey your message effectively. Whether you're a seasoned presenter looking to refine your approach 
or a novice seeking guidance, this comprehensive guide is your roadmap to success in the world of presentations</p>


  <div id = "tipsTricks">{tips}</div>
  









    </div>
  );
}

export default App;
