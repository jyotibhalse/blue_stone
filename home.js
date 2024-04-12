import React from "react";
import Header from "../../component/header";
import '../home/home.css';
import { Card, CardHeader, Col, Container, Row } from "react-bootstrap";
import Basic from '../../component/Basic';
import Hello from "../../component/hello";
import Temp from "../../component/temp";
import Video from "../../component/video";
import Tcard from "../../component/Tcard";
import Multicard from "../../component/Multicard";
import Headcard from "../../component/Headcard";
import List from '../../component/list';
import Boxcard from '../../component/Boxcard';
import Russellcard from '../../component/Russellcard';
import Footer from "../../component/footer";
import Forbes from "../../component/Forbes";
import data from "../img/data";


export default function Home(props) {
  console.log(props)


  return (
    <div>
      {/* ---------first part--------- */}
      <div >
        <Header />
      </div><br /><br />

      {/* -------------second part---------- */}
<Container>
<div className="container">
        <mark style={{ marginTop: "10px" }}> Want To Geometrically Grow Your Company Online? </mark>
        <div className="heading">
          <h1 style={{ fontSize: "1.5rem" }}>New FREE BOOK Shows
            28 Virtually UNKNOWN Secrets
          </h1>
          <h2>To Grow Any Company Online With Sales Funnels..."</h2>
        </div>

      </div>

</Container>
    

      {/* ------------third part------------- */}
      <div >
        <Basic />

      </div><br/>

      <br /><br />
      {/* --------------fourth part------------------ */}


      <div>
        <Hello />
      </div><br/><br/>

      {/* --------------six part------------------ */}
      <div>
      
        <Forbes />
      </div><br/>


      <br /><br />

      {/* --------------seven part------------------ */}
      <div className="flex-container_11">
        {/* className="flex-container_11" */}
        <img src="https://dotcomsecrets.com/hosted/images/8e/4ee5703ed7475584ca921216802550/dotcom-secrets-02-min.png" />
      </div>
      <Container>
        <div className="flex-container-12">
          < p>Like I mentioned before, <b>this book is free.</b> I'll pay for the book and all I ask is that you <u>help me cover the shipping and handling cost </u>and we'll send it anywhere in the world! <b>If you would prefer to listen to the audiobook, I also have it for sale for a small fee once you put your details in below...</b></p>

        </div>

      </Container><br/>
      

      {/* --------------eight part------------------ */}


      <Container className="flex1">
        <Temp />
      </Container><br/>


      {/* --------------nine part------------------ */}

      <div className="demo1">
       
          <p>What Are Others Already SayingAbout 'DotCom Secrets?'</p>

        
      </div><br/><br/>
       
      {/* --------------ten part------------------ */}

      {/* <div className="vd1">
              <Video/><br/>
              </div>
             */}
             {/* <Video/><br/>
              */}
      {/* --------------11 part------------------ */}

      {/* <Container id="http1">
                <h3>As You Can See...</h3><br/>
                <h4>DotCom Secrets Has Already Helped <br/>Countless People Around The World...</h4><br/>
                <h5>The Question Is, Are YOU Next?</h5>
            </Container><br/> */}

      {/* --------------12 part------------------ */}
      <div className="flex_home">
              <Tcard/>
                  
            </div>

      <br />

      {/* --------------13 part------------------ */}
      <Container>
            <div className="cc1">
            <h1>Claim Your FREE Book Now and</h1>
           <h2>Get These FREE Bonuses!</h2>
           </div> 
            </Container>

      {/* --------------14 part------------------ */}
      <div className="data1">
      {data.map((item)=>{
                return <Multicard
                title ={item.title}
                body ={item.body}
                rate={item.rate}
               para1={item.para1}
                para2={item.para2}
                para3={item.para3}
                para4={item.para4}
                url={item.url}
              />
            })}

      </div>
      
     {/* <Contact/> */}



      
      <Container>
              <Temp/>
            </Container><br/>
           <Container Container>
               <div className="flex2">
                <h2>
                Like I mentioned before, this book is free. All I ask is that you help me cover the printing and postage costs of $9.95 US or $19.95 International, anywhere in the world!<br/>
                Oh, and in case you're wondering...

                </h2>

                </div>
       
                </Container>

      
                <Container>
                <div className="catch">
                 
                 <h3>
                 "There Is NO CATCH!"
                  </h3> 
                
                 </div>

                </Container>
        
        <Container className="flex2">
                    <h2>
                    I know there are some websites out there that offer you something cool for free, but then stick you into some program that charges your card every month.

                    </h2>
                </Container>
                <Container>
                <div className="flex2">
                <List/>
                </div>
      
                </Container>
                  <Container>
                  
                <div className="catch">
               <h3>
                 "Here Is My You've Gotta Be Crazy"Guarantee
               
                </h3>         
                
                </div>

        </Container>
       
        <Container id="sound">
                    <h2>
                    I 100% guarantee that you'll love this book, or I'll return your $9.95 shipping and let you keep the book anyway.<br/><br/>

                    That's right. You don't even have to send anything back. Just email me or call the number on your receipt and I'll give you back your money with no questions asked.<br/><br/>
                    Sound fair?
                    </h2>
                </Container>
        <Boxcard
                title="Let Me Show You EVERYTHING You Get When You Order 'DotCom Secrets' Today!
                "
                para2="Total Value: $359.95
                "
                />
        <br />
        {/* <Container id='demo3'>
                    <h3>This Is Truly A Limited Offer, So<br/> Claim Your FREE Copy Now <br/>Before They're All Gone...</h3>
                </Container><br/><br/> */}
                <Container className="parap">
                    <h2>Thanks for taking the time to read this letter and I hope you enjoy the book!<br/><br/>

                   Thanks,<br/>
                  Russell Brunson<br/><br/><br/>
                 P.S. In case you're one of those people (like me) who just skips to the end of the letter, here's the deal:<br/><br/>

                  {/* <h1 style={{fontSize:'24px',fontWeight:'bold'}}>I'm mailing you a 393-page hardcover book, "DotCom Secrets - The Underground Playbook For Growing Your Company Online With Sales Funnels" (that retails at $24.95) for FREE. Yes, this book is free, and all you pay is $9.95 US or $19.95 International anywhere in the world.</h1><br/><br/> */}

                  There's no catch... no gimmicks... You will NOT be signing up for any "trial" to some monthly program or anything like that.<br/><br/>

                  If fact, if you don't love the book - I'll even refund your shipping costs (and you don't have to ship the book back).<br/><br/>

                So, Click the button below to get your FREE copy now. You won't regret it.
                  </h2><br/>
                </Container><br/><br/><br/>
        <Russellcard/><br/><br/><br/>
        <div >
          <Footer />

        </div>
      




      {/* </Col> */}
      {/* </Row> */}
    


    </div>
  );
}