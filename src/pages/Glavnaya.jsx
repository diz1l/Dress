import React from 'react'


function Glavnaya() {
  return (
    <div className='brands'>
       <div className="onas"> 

<span className='text1'>Бренды</span>
<span className='text2'>Ознакомтесь с популярными брендами обежды что бы выбор был интереснее!</span>
</div>
    <div className='homee'>      
      <div className='glavnaya' >
      <div className='circle'>
        <img src="https://logos-world.net/wp-content/uploads/2021/08/Balenciaga-Logo.png" className='logo'></img>
      </div>
      <div className='contentss'>
        <h2>Balenciaga</h2>
        <p>Balenciaga — дом моды, основанный испанским дизайнером Кристобалем Баленсиагой, родившимся в Стране Басков. Ныне дом Balenciaga принадлежит французской модной группе Kering.</p>
        <a href='https://www.balenciaga.com/en-en'><br/>Поситить сайт</a>
        </div>   
        <img src="https://i.pinimg.com/originals/40/32/51/4032512d57ae02feebaf73170bd55440.png" className='model'></img>   
    </div>
    {/* новый блок */}
    <div className='glavnaya' >
      <div className='circle'>
        <img src="https://cdn.shopify.com/s/files/1/0549/4895/4134/t/82/assets/logo-black.svg?v=140515931841125915371649784351" className='logo'></img>
      </div>
      <div className='contentss'>
        <h2>SPANX</h2>
        <p>Spanx, Inc. - американский производитель нижнего белья</p>
        <a href='https://spanx.com/'><br/>Поситить сайт</a>
        </div>   
        <img src="https://cdn.shopify.com/s/files/1/0549/4895/4134/files/SL_ankle_slim_straight.png?v=1651876360" className='model'></img>   
    </div>
  {/* новый блок */}
  <div className='glavnaya' >
      <div className='circle'>
        <img src="http://assets.stickpng.com/images/58429658a6515b1e0ad75ad4.png" className='logo'></img>
      </div>
      <div className='contentss'>
        <h2>Versace</h2>
        <p>Gianni Versace  — итальянская компания, основанная в 1978 году модельером Джанни Версаче, производитель модной одежды, парфюмерии, часов, товаров для дома, аксессуаров и других предметов роскоши.</p>
        <a href='https://www.versace.ru/ru/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F/'><br/>Поситить сайт</a>
        </div>   
        <img src="https://mainstyles.ru/uploads/Versace_Spring_2021_02_Mainstyles.jpg" className='model'></img>   
    </div>
      {/* новый блок */}
  <div className='glavnaya' >
      <div className='circle'>
        <img src="https://logojinni.com/image/logos/off-white-79.svg" className='logo'></img>
      </div>
      <div className='contentss'>
        <h2>Off-White</h2>
        <p>Off-White — итальянский бренд стритвир-одежды премиум-класса.</p>
        <a href='https://www.off---white.com/en-kz/'><br/>Поситить сайт</a>
        </div>   
        <img src="https://m.buro247.ru/images/andreeva/670-830-Off-White-S19-087.jpg" className='model'></img>   
    </div>
    </div>
    </div>
  )
}
export default Glavnaya