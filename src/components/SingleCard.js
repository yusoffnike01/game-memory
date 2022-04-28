import './SingleCard.css';
export default function SingeleCard({card, handleChoice,flipped,disabled}){

  const handleClick=()=>{
    if(!disabled){
      handleChoice(card);
    }
   
  }
  return ( <div className="card" >
  <div className={flipped ? "flipped": ""}>
    <img className='front' src={card.src} alt="card front"/>
    <img 
      className='back' 
      src="/img/cover.png"
      onClick={handleClick} 
      alt="card front"/>

  </div>
</div>)
}