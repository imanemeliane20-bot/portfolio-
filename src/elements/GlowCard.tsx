import React, { useRef } from 'react'

const GlowCard = ({ card, children ,index }: { card: any, children: React.ReactNode  , index:any}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index:any) =>(e: React.MouseEvent<HTMLDivElement>)=> {
    const card = cardRefs.current[index]
    if (!card) return;
        //get the mouse position relative to card
    const rect=card.getBoundingClientRect();
    const mouseX= e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY -rect.top -rect.height / 2 ;

        //calc the angle from the center of the card
        let angle= Math.atan2(mouseY,mouseX) * (180 /Math.PI);
        angle=(angle + 360) %360;
        card.style.setProperty('--start' ,String(angle + 60))
  }

  return (
    <div
      ref={(el)=>(cardRefs.current[index]=el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl p-10"
    >
      <div
        className="pointer-events-none absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ filter: 'blur(10px) saturate(200%)' }}
      />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="./images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
        <div className='mb-5'>
            <p className='text-white text-lg'
            style={{ fontFamily: "'Nunito', sans-serif" }}

            >
               {card.review} 
            </p>
        </div>
      {children}
    </div>
  )
}

export default GlowCard