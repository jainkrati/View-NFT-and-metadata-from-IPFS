import logo from './logo.svg';
import './App.css';
// import { Web3 } from "web3";
import React, { useState } from 'react';
// const web3 = new Web3("ws://localhost:8545");
// var Contract = require('web3-eth-contract');
// // set provider for all later instances to use
// Contract.setProvider('ws://localhost:8546');

// var myContract = new Contract("", "");

function App() {
  const [chosenNFT, setChosenNFT] = useState(1);
  const [nftImage, setNftImage] = useState("");
  const [nftData, setNftData] = useState("");

  let imageBaseURI = "https://gateway.pinata.cloud/ipfs/QmSAxLWnXzXLowFunZ8iuaxTDUfG1AN8sxGPPdmZ6DiC6y/"
  let dataBaseURI = "https://gateway.pinata.cloud/ipfs/QmRrpZC4E6fhzmdnwyxs515Se9EM9oLmrW6DwpVJMzgNV4/"

  function getNFTs() {
    //   myContract.getPastEvents('Transfer', {
    //     filter: {}, 
    //     fromBlock: 0,
    //     toBlock: 'latest'
    // }, function(error, events){ 
    //   console.log(events);
    // })
    // .then(function(events){
      // const eventItems = events.map((event) =>
      // <li>{event.raw.topics}</li>
      // );
      // return eventItems;
    // });
    
    
      var tokenIDs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const listItems = tokenIDs.map((token) =>
      <li><button onClick={() => {
        setChosenNFT(token);
        setNftImage(imageBaseURI+token+".jpg");
        setNftData(dataBaseURI+token+".json");
        }}>
      {token}
    </button></li>
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }


  return (
    <div className="App">
      <p>
          Group 10 Week 4 submission
        </p>
        {getNFTs()}
        <p>Chosen NFT:{chosenNFT}</p>
        <img style={{
            resizeMode: "cover",
            height: 100,
            width: 200
          }} src={nftImage}/>
        <p>{nftData}</p>

    </div>
    
  );
}



export default App;
