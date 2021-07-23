import React from 'react';
import '../components/Cards.css'

const Cards = () => {
     return (
          <section className='cards-container'>
               <img className="header-cards" src={require('./images-manners/admins.png').default} alt="Travel Image" />  
                    <div className='cards-item-container-1'>
                         <div className='content-item-1'>
                                   <img className='image-1' src={require('./images-manners/cherry.png').default} alt="Travel Image" />   
                         </div>
                         <div className='content-item-1'>
                                   <img className='image-1 tkun-image' src={require('./images-manners/tkun.png').default} alt="Travel Image" />
                         </div>
                         <div className='content-item-1'>
                                   <img className='image-1 jhera-image' src={require('./images-manners/jhera.png').default} alt="Travel Image" />
                         </div>
                    </div>

                    <div className='cards-item-container-2'>
                         <div className='content-item-2'>
                                   <img className='image-2' src={require('./images-manners/m.png').default} alt="Travel Image" />      
                         </div>
                         <div className='content-item-2'>
                                   <img className='image-2' src={require('./images-manners/deiji.png').default} alt="Travel Image" />
                         </div>
                         <div className='content-item-2'>
                                   <img className='image-2' src={require('./images-manners/panda.png').default} alt="Travel Image" />
                         </div>
                         <div className='content-item-2'>
                                   <img className='image-2' src={require('./images-manners/whiteheart.png').default} alt="Travel Image" />
                         </div>
                    </div>
               
          </section>
     )
}

export default Cards
