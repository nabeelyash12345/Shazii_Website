import React, { useState } from 'react';
import Card from './itemCardData';
import Popup from './itemCardPopup';




import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const MainCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
        id: 1,
        title: 'Transport senira',
        image: 'https://i.ibb.co/h1dQ3j3/2.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
    },
    {
        id: 2,
        title: 'Lobour',
        image: 'https://i.ibb.co/CWSWfJq/3.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
      },
      {
        id: 3,
        title: 'Tuff Tiles',
        image: 'https://i.ibb.co/tZdG8DH/4.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
      },
      {
        id: 4,
        title: 'Flowerpot',
        image: 'https://i.ibb.co/HghZnsZ/5.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
      },
      {
        id: 5,
        title: 'J&S Son',
        image: 'https://i.ibb.co/G7FPf67/profile.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
      },
      {
        id: 6,
        title: 'Gate Flower',
        image: 'https://i.ibb.co/tZdG8DH/4.png',
        description: 'We present you a proposal and discuss niffty-gritty like',
        priceTitle1: "Price",
        priceDesc1: "8x6x12",
        priceButton1: "Order Now",
        priceTitle2: "Price",
        priceDesc2: "8x6x12",
        priceButton2: "Order Now",
        priceTitle3: "Price",
        priceDesc3: "8x6x12",
        priceButton3: "Order Now",
      },
    // Add data for the other 4 cards
  ];

  const openPopup = (cardData) => {
    setSelectedCard(cardData);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        
          <div className="main">
                <div className="card-container card-wrapper">
              <Grid container spacing={0}>
                    {cardData.map((card) => (
                        <Grid item lg={4} sm={6} xs={12} md={6}>
                            <Card key={card.id} cardData={card} onCardClick={openPopup} />
                      </Grid>
                    ))}
                </Grid>
                </div>

            {selectedCard && (
                <Popup cardData={selectedCard} onClose={closePopup} />
            )}
            </div>
          
      </Box>
    </>
    
  );
};

export default MainCard;
